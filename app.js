document.getElementById("search-btn").addEventListener("click", function() { 
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define what happens when the response is loaded
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Create custom modal
            showModal(xhr.responseText);
        } else {
            showModal("An error occurred while trying to fetch the data.");
        }
    };

    // Configure the AJAX request to superheroes.php
    xhr.open("GET", "superheroes.php", true);

    // Send the request
    xhr.send();
});

// Function to show the modal
function showModal(message) {
    // Create modal elements
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const messageElement = document.createElement("p");
    const okButton = document.createElement("button");

    // Add classes for styling
    modal.classList.add("modal");
    modalContent.classList.add("modal-content");
    okButton.classList.add("ok-button");

    // Set the message and button text
    messageElement.textContent = message;
    okButton.textContent = "Okay";

    // Append the elements to the DOM
    modalContent.appendChild(messageElement);
    modalContent.appendChild(okButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Add event listener to close the modal when "Okay" is clicked
    okButton.addEventListener("click", function() {
        document.body.removeChild(modal);
    });
}
