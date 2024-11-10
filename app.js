document.getElementById("searchButton").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const superheroes = JSON.parse(xhr.responseText);
            const superheroList = document.getElementById("superheroList");
            superheroList.innerHTML = "";
            superheroes.forEach(hero => {
                const li = document.createElement("li");
                li.textContent = hero;
                superheroList.appendChild(li);
            });
            document.getElementById("resultModal").style.display = "block";
        }
    };
    xhr.send();
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("resultModal").style.display = "none";
});
