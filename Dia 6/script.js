
document.addEventListener('DOMContentLoaded', () => {
    const UrlBase = 'https://superheroapi.com/api.php/e3957a63e8a4a50a8ddd040c3d756e0d/';
    const searchButton = document.getElementById('searchButton');
    const heroIdInput = document.getElementById('heroId');
    const dataTable = document.getElementById('data');

    const fetchHero = (id) => {
        const Url = `${UrlBase}${id}`;
        fetch(Url)
            .then(response => response.json())
            .then(data => {
                updateTable([data]);
            })
            .catch(() => {
                dataTable.innerHTML = `<tr><td colspan="4">Error fetching data for ID ${id}</td></tr>`;
            });
    };

    const updateTable = (heroes) => {
        let body = '';
        heroes.forEach(hero => {
            // Construir la fila de la tabla con una imagen
            body += `
                <tr>
                    <td>${hero.id}</td>
                    <td>${hero.name}</td>
                    <td><img src="${hero.image.url}" alt="${hero.name}" style="width: 8vw; height: auto;"></td>
                </tr>`;
        });
        dataTable.innerHTML = body;
    };

    searchButton.addEventListener('click', () => {
        const heroId = heroIdInput.value;
        if (heroId) {
            fetchHero(heroId);
        } else {
            dataTable.innerHTML = `<tr><td colspan="4">Please enter a hero ID</td></tr>`;
        }
    });
});

