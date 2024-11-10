document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    // Function to open the modal
    function openModal(data) {
        modal.innerHTML = `
            <ul>
                ${data.map(name => `<li>${name}</li>`).join('')}
            </ul>
            <button id="ok-btn">OK</button>
        `;
        
        overlay.style.display = "block";
        modal.style.display = "block";

        // Event listener to close the modal when OK button is clicked
        document.getElementById("ok-btn").addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);
    }

    // Function to close the modal
    function closeModal() {
        overlay.style.display = "none";
        modal.style.display = "none";
    }

    // Fetch data from superheroes.php on button click
    searchBtn.addEventListener("click", () => {
        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Assuming superheroes.php returns JSON data
            })
            .then(data => {
                openModal(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                modal.innerHTML = `
                    <p>Failed to load data. Please try again later.</p>
                    <button id="ok-btn">OK</button>
                `;
                openModal([]);
            });
    });
});
