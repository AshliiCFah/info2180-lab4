document.getElementById("search-btn").addEventListener("click", function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define what happens when the response is loaded
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Get the list of superheroes from the response
            const superheroes = JSON.parse(xhr.responseText);

            // Create the HTML for the list
            const listHTML = superheroes.map(superhero => `<li>${superhero.alias}</li>`).join('');

            // Display the list in the HTML
            document.getElementById("character-list").innerHTML = listHTML;
            document.getElementById("character-list").style.display = "block";
        } else {
            alert("An error occurred while trying to fetch the data.");
        }
    };

    // Configure the AJAX request to superheroes.php
    xhr.open("GET", "superheroes.php", true);

    // Send the request
    xhr.send();
});