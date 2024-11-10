document.getElementById("search-btn").addEventListener("click", function() {
    // Get the search input from the user and sanitize it
    const searchInput = document.getElementById("search-input").value.trim();
    const sanitizedQuery = encodeURIComponent(searchInput); // Sanitize input by encoding it

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Open the request - set up the HTTP GET request to the PHP script
    xhr.open("GET", `superheroes.php?query=${sanitizedQuery}`, true);

    // Define what happens when the response is loaded
    xhr.onload = function() {
        const resultDiv = document.getElementById("result");
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); // Parse JSON response

            // Clear previous results
            resultDiv.innerHTML = '';

            if (Array.isArray(response) && response.length > 0) {
                // If the response is an array, display the list of superheroes
                let listHtml = '<ul>';
                response.forEach(hero => {
                    listHtml += `<li>${hero}</li>`; // Display each hero's alias in a list
                });
                listHtml += '</ul>';
                resultDiv.innerHTML = listHtml;
            } else if (response.alias && response.name && response.bio) {
                // If only one superhero is returned, format it correctly
                resultDiv.innerHTML = `
                    <h3>${response.alias}</h3>
                    <h4>A.K.A ${response.name}</h4>
                    <p>${response.bio}</p>
                `;
            } else {
                // If no superheroes are found, display an error message
                resultDiv.innerHTML = '<p class="error">SUPERHERO NOT FOUND</p>';
            }
        } else {
            resultDiv.innerHTML = '<p class="error">An error occurred while trying to fetch the data.</p>';
        }
    };

    // Send the request to the server
    xhr.send();
});
