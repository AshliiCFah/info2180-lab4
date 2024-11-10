document.getElementById("search-btn").addEventListener("click", function() {
    console.log("Search button clicked"); // Debugging log

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define what happens when the response is loaded
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Data fetched successfully:", xhr.responseText); // Debugging log

            // Parse the response text as JSON
            const data = JSON.parse(xhr.responseText);

            // Open modal and display data
            openModal(data);
        } else {
            console.log("Error fetching data:", xhr.status); // Debugging log
            alert("An error occurred while trying to fetch the data.");
        }
    };

    // Configure the AJAX request to superheroes.php
    xhr.open("GET", "superheroes.php", true);
    console.log("Sending request to superheroes.php"); // Debugging log

    // Send the request
    xhr.send();
});

// Create overlay and modal elements dynamically
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

// Function to open the modal and display data

function openModal(data) {
    // Populate the modal with the list of characters
    modal.innerHTML = `
        <ul>
            ${data.map(name => `<li>${name}</li>`).join('')}
        </ul>
        <button id="ok-btn">OK</button>
    `;

    // Display overlay and modal
    overlay.style.display = "block";  // Show the overlay
    modal.style.display = "block";    // Show the modal

    // Add event listener to close the modal when "OK" button is clicked
    document.getElementById("ok-btn").addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
}

