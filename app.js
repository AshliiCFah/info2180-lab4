document.getElementById("search-btn").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value.trim();
    const sanitizedQuery = encodeURIComponent(searchInput); // Sanitize input by encoding it

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define what happens when the response is loaded
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("result").innerHTML = xhr.responseText; // Display result in the result div
        } else {
            document.getElementById("result").innerHTML = "An error occurred while trying to fetch the data.";
        }
    };

    // Configure the AJAX request to superheroes.php with query parameter
    xhr.open("GET", `superheroes.php?query=${sanitizedQuery}`, true);

    // Send the request
    xhr.send();
});
