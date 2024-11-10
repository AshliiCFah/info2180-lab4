document.getElementById("search-btn").addEventListener("click", function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Define what happens when the response is loaded
    xhr.onload = function() {
      if (xhr.status === 200) {
        const superheroData = JSON.parse(xhr.responseText); // Parse JSON response
  
        // Target the unordered list
        const superheroList = document.getElementById("superhero-list");
  
        // Clear any existing list items (optional)
        superheroList.innerHTML = ""; 
  
        // Loop through superhero data and create list items
        for (const superhero of superheroData) {
          const listItem = document.createElement("li");
          listItem.textContent = superhero.alias;
          superheroList.appendChild(listItem);
        }
      } else {
        alert("An error occurred while trying to fetch the data.");
      }
    };
  
    // Configure the AJAX request to superheroes.php
    xhr.open("GET", "superheroes.php", true);
  
    // Send the request
    xhr.send();
  });