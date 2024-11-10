const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php');

    xhr.onload = () => {
        if (xhr.status === 200) {
            const superheroes = xhr.responseText;

            // Create a custom alert element
            const alertDiv = document.createElement('div');
            alertDiv.classList.add('custom-alert');
            alertDiv.textContent = superheroes;

            // Add the alert to the body
            document.body.appendChild(alertDiv);

            // Remove the alert after a certain time (optional)
            setTimeout(() => {
                alertDiv.remove();
            }, 3000); // Remove after 3 seconds
        } else {
            console.error('Error fetching superheroes:', xhr.statusText);
            alert('An error occurred while fetching superheroes.');
        }
    };

    xhr.send();
});