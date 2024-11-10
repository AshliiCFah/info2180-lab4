document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-btn").addEventListener("click", function() {
      const searchInput = document.getElementById("search-input").value.trim();
      const sanitizedQuery = encodeURIComponent(searchInput);
  
      // Create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();
  
      // Define what happens when the response is loaded
      xhr.onload = function() {
        const resultDiv = document.getElementById("result");
  
        resultDiv.innerHTML = '<h2>RESULT</h2><hr>';  // Ensure the title and horizontal line appear
  
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText); // Parse JSON response
  
          if (Array.isArray(response)) {
            // If the response is an array, display the list of superheroes
            let listHtml = '<ul>';
            response.forEach(hero => {
              listHtml += `<li>${hero.alias} - ${hero.name}</li>`;  // Display alias and name
            });
            listHtml += '</ul>';
            resultDiv.innerHTML += listHtml;
          } else if (response.alias && response.name && response.bio) {
            // If a single superhero is returned, display their details properly
            resultDiv.innerHTML += `
              <h3>${response.alias}</h3>
              <h4>A.K.A ${response.name}</h4>
              <p>${response.bio}</p>
            `;
          } else {
            // If no superhero matches the query
            resultDiv.innerHTML += '<p class="error">SUPERHERO NOT FOUND</p>';
          }
        } else {
          resultDiv.innerHTML += '<p class="error">An error occurred while trying to fetch the data.</p>';
        }
      };
  
      // Configure the AJAX request to superheroes.php with query parameter
      xhr.open("GET", `superheroes.php?query=${sanitizedQuery}`, true);
  
      // Send the request
      xhr.send();
    });
  });
  