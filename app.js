document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-btn").addEventListener("click", function() {
        const searchInput = document.getElementById("search-input").value.trim();
        const sanitizedQuery = encodeURIComponent(searchInput);

        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Define what happens when the response is loaded
        xhr.onload = function() {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = '';  // Clear previous results

            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText); // Parse JSON response

                if (response.length === 0) {
                    // No superheroes found
                    resultDiv.innerHTML = '<p class="error">SUPERHERO NOT FOUND</p>';
                } else if (response.length === 1) {
                    // Display single superhero details with "RESULT" title
                    const hero = response[0];
                    resultDiv.innerHTML = `
                        <h2>RESULT</h2><hr>
                        <h3>${hero.alias.toUpperCase()}</h3>
                        <h4>A.K.A ${hero.name}</h4>
                        <p>${hero.biography}</p>
                    `;
                } else {
                    // Display list of superheroes with "RESULT" title
                    let listHtml = '<h2>RESULT</h2><hr><ul>';
                    response.forEach(hero => {
                        listHtml += `<li>${hero.alias} - ${hero.name}</li>`;
                    });
                    listHtml += '</ul>';
                    resultDiv.innerHTML = listHtml;
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
});

