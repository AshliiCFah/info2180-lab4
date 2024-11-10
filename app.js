document.getElementById("search-btn").addEventListener("click", function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define what happens when the response is loaded
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Show the list of superheroes as an alert
            alert(xhr.responseText);
        } else {
            alert("An error occurred while trying to fetch the data.");
        }
    };

    // Configure the AJAX request to superheroes.php
    xhr.open("GET", "superheroes.php", true);

    // Send the request
    xhr.send();
});
