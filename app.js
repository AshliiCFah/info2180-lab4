document.getElementById("search-btn").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status === 200) {
            const characters = xhr.responseText.split("\n").map(name => name.trim());
            const list = document.getElementById("character-list");
            list.innerHTML = ""; // Clear previous list

            characters.forEach(character => {
                const listItem = document.createElement("li");
                listItem.textContent = character;
                list.appendChild(listItem);
            });

            document.getElementById("modal").style.display = "flex"; // Show the modal
        } else {
            alert("An error occurred while trying to fetch the data.");
        }
    };

    xhr.open("GET", "superheroes.php", true);
    xhr.send();
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none"; // Hide the modal
});
