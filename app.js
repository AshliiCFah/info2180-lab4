document.getElementById("search-btn").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.trim();
    const sanitizedQuery = encodeURIComponent(searchInput);
  
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Define what happens when the response is loaded
    xhr.onload = function() {
      const resultDiv = document.getElementById("result");
      
      // Clear previous results
      resultDiv.innerHTML = '<h2>RESULT</h2><hr>';
  
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText); // Parse JSON response
  
        if (Array.isArray(response)) {
          // Display list of superheroes if response is an array
          let listHtml = '<ul>';
          response.forEach(hero => {
            listHtml += `<li>${hero}</li>`;
          });
          listHtml += '</ul>';
          resultDiv.innerHTML += listHtml;
  
        } else if (response.alias && response.name && response.bio) {
          // Display single superhero details
          resultDiv.innerHTML += `
            <h3>${response.alias}</h3> <!-- Alias in <h3> -->
            <h4>A.K.A ${response.name}</h4> <!-- Name in <h4> -->
            <p>${response.bio}</p> <!-- Bio in <p> -->
          `;
        } else {
          // Display error if no match is found
          resultDiv.innerHTML += '<p class="error">SUPERHERO NOT FOUND</p>';
        }
      } else {
        resultDiv.innerHTML = '<p class="error">An error occurred while trying to fetch the data.</p>';
      }
    };
  
    // Configure the AJAX request to superheroes.php with query parameter
    xhr.open("GET", `superheroes.php?query=${sanitizedQuery}`, true);
  
    // Send the request
    xhr.send();
  });
  