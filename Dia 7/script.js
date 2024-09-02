document.addEventListener('DOMContentLoaded', () => {
    const Url = 'https://swapi.py4e.com/api/people/1'; // URL API
    const dataTable = document.getElementById('data');

    const fetchStar = () => {
        fetch(Url)
            .then(response => response.json())
            .then(data => {
                return fetch(data.homeworld)
                    .then(homeworldResponse => homeworldResponse.json())
                    .then(homeworldData => {
                        const filmUrls = [
                            'https://swapi.py4e.com/api/films/2/',
                            'https://swapi.py4e.com/api/films/6/',
                            'https://swapi.py4e.com/api/films/3/',
                            'https://swapi.py4e.com/api/films/1/',
                            'https://swapi.py4e.com/api/films/7/'
                        ];
                        const speciesUrls = [
                            'https://swapi.py4e.com/api/species/1/'
                        ];
                        const vehiclesUrls = [
                            'https://swapi.py4e.com/api/vehicles/14/',
                            'https://swapi.py4e.com/api/vehicles/30/'
                        ];
                        const starshipsUrls = [
                            'https://swapi.py4e.com/api/starships/12/',
                            'https://swapi.py4e.com/api/starships/22/'
                        ];
                        const filmPromises = filmUrls.map(filmUrl => 
                            fetch(filmUrl).then(filmResponse => filmResponse.json())
                        );
                        const speciesPromises = speciesUrls.map(speciesUrl => 
                            fetch(speciesUrl).then(speciesResponse => speciesResponse.json())
                        );
                        const vehiclesPromises = vehiclesUrls.map(vehiclesUrl => 
                            fetch(vehiclesUrl).then(vehiclesResponse => vehiclesResponse.json())
                        );
                        const starshipsPromises = starshipsUrls.map(starshipsUrl => 
                            fetch(starshipsUrl).then(starshipsResponse => starshipsResponse.json())
                        );
                        return Promise.all([Promise.all(filmPromises), Promise.all(speciesPromises),Promise.all(vehiclesPromises),Promise.all(starshipsPromises)])
                            .then(([films, species, vehicles, starships ]) => {
                                cargarTabla(data, homeworldData, films, species, vehicles, starships);
                            });
                    });
            })
            .catch(error => {
                console.error('Error:', error);
                dataTable.innerHTML = `<tr><td colspan="2"> Error: ${error.message} </td></tr>`;
            });
    };

    const cargarTabla = (data, homeworldData, films, species, vehicles, starships ) => {
        // Crear el contenido para la tabla
        const body = `
        <tr>
            <td>Name:</td>
            <td>${data.name}</td>
        </tr>
        <tr>
            <td>Heigth:</td>
            <td>${data.height}</td>
        </tr>
        <tr>
            <td>Mass:</td>
            <td>${data.mass}</td>
        </tr>
        <tr>
            <td>Hair Color:</td>
            <td>${data.hair_color}</td>
        </tr>
        <tr>
            <td>Skin Color:</td>
            <td>${data.skin_color}</td>
        </tr>
        <tr>
            <td>Eye Color:</td>
            <td>${data.eye_color}</td>
        </tr>
        <tr>
            <td>Birth Year:</td>
            <td>${data.birth_year}</td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>${data.gender}</td>
        </tr>
        <tr>
            <td>Homeworld:</td>
            <td>
                <div><span class="label1">Name:</span>${homeworldData.name}</div>
                <div><span class="label2">Rotation Period:</span>${homeworldData.rotation_period}</div>
                <div><span class="label3">Orbital Period:</span>${homeworldData.orbital_period}</div>
                <div><span class="label4">Diameter:</span>${homeworldData.diameter}</div>
                <div><span class="label5">Climate:</span>${homeworldData.climate}</div>
                <div><span class="label6">Gravity:</span>${homeworldData.gravity}</div>
                <div><span class="label7">Terrain:</span>${homeworldData.terrain}</div>
                <div><span class="label8">Surface Water:</span>${homeworldData.surface_water}</div>
                <div><span class="label9">Population:</span>${homeworldData.population}</div>
                <div><span class="label10">Created:</span>${homeworldData.created}</div>
                <div><span class="label11">Edited:</span>${homeworldData.edited}</div>
                <div><span class="label12">Url:</span><a href="${data.homeworld}" target="_blank">${data.homeworld}</a></div>
            </td>
        </tr>
        <tr>
            <td>Films:</td>
            <td>
                ${films.map(film => `
                    <div><span class="label1">Title</span>${film.title}</div>
                    <div><span class="label2">Episode id:</span>${film.episode_id}</div>
                    <div><span class="label3">Opening crawl:</span>${film.title}</div>
                    <div><span class="label4">Director:</span>${film.director}</div>
                    <div><span class="label5">Producer:</span>${film.producer}</div>
                    <div><span class="label6">Release date:</span>${film.release_date}</div>
                    <div><span class="label10">Created:</span>${film.created}</div>
                    <div><span class="label11">Edited:</span>${film.edited}</div>
                    <div><span class="label12">Url:</span><a href="${film.url}" target="_blank">${film.url}</a></div>
                    <div><span class="label10">________________________________________________________________________________</span></div>
                `).join('')}
            </td>
        </tr>
        <tr>
            <td>Especies:</td>
            <td>
                ${species.map(speciesItem => `
                    <div><span class="label1">Name:</span>&nbsp;${speciesItem.name}</div>
                    <div><span class="label2">Classification:</span>${speciesItem.classification}</div>
                    <div><span class="label3">Designation:</span>${speciesItem.designation}</div>
                    <div><span class="label4">Average height:</span>${speciesItem.average_height}</div>
                    <div><span class="label5">Skin colors:</span>${speciesItem.skin_colors}</div>
                    <div><span class="label6">Hair colors:</span>${speciesItem.hair_colors}</div>
                    <div><span class="label7">Eye colors:</span>${speciesItem.eye_colors}</div>
                    <div><span class="label8">Average lifespan:</span>${speciesItem.average_lifespan}</div>
                    <div><span class="label4">Homeworld:</span><a href="${speciesItem.homeworld}" target="_blank">${speciesItem.homeworld}</a></div>
                    <div><span class="label5">Language:</span>${speciesItem.language}</div>
                    <div><span class="label6">Created:</span>${speciesItem.created}</div>
                    <div><span class="label7">Edited:</span>${speciesItem.edited}</div>
                    <div><span class="label9">Url:</span><a href="${speciesItem.url}" target="_blank">${speciesItem.url}</a></div>
                `).join('')}
            </td>
        </tr>
        <tr>
            <td>Vehicles:</td>
            <td>
                ${vehicles.map(vehiclestum => `
                    <div><span class="label1">Name:</span>&nbsp;${vehiclestum.name}</div>
                    <div><span class="label2">Model:</span>${vehiclestum.model}</div>
                    <div><span class="label3">Manufacturer:</span>${vehiclestum.manufacturer}</div>
                    <div><span class="label4">Cost in credits:</span>${vehiclestum.cost_in_credits}</div>
                    <div><span class="label5">Length:</span>${vehiclestum.length}</div>
                    <div><span class="label6">Max atmosphering speed:</span>${vehiclestum.max_atmosphering_speed}</div>
                    <div><span class="label7">Crew:</span>${vehiclestum.crew}</div>
                    <div><span class="label8">Passengers:</span>${vehiclestum.passengers}</div>
                    <div><span class="label4">Cargo capacity:</span>${vehiclestum.cargo_capacity}</div>
                    <div><span class="label5">Consumables:</span>${vehiclestum.consumables}</div>
                    <div><span class="label6">Vehicle class:</span>${vehiclestum.vehicle_class}</div>
                    <div><span class="label7">Created:</span>${vehiclestum.created}</div>
                    <div><span class="label7">Edited:</span>${vehiclestum.edited}</div>
                    <div><span class="label9">Url:</span><a href="${vehiclestum.url}" target="_blank">${vehiclestum.url}</a></div>
                    <div><span class="label10">________________________________________________________________________________</span></div>
                `).join('')}
            </td>
        </tr>
        <tr>
            <td>Starships:</td>
            <td>
                ${starships.map(starshipsED => `
                    <div><span class="label1">Name:</span>&nbsp;${starshipsED.name}</div>
                    <div><span class="label2">Model:</span>${starshipsED.model}</div>
                    <div><span class="label3">Manufacturer:</span>${starshipsED.manufacturer}</div>
                    <div><span class="label4">Cost in credits:</span>${starshipsED.cost_in_credits}</div>
                    <div><span class="label5">Length:</span>${starshipsED.length}</div>
                    <div><span class="label6">Max atmosphering speed:</span>${starshipsED.max_atmosphering_speed}</div>
                    <div><span class="label7">Crew:</span>${starshipsED.crew}</div>
                    <div><span class="label8">Passengers:</span>${starshipsED.passengers}</div>
                    <div><span class="label4">Cargo capacity:</span>${starshipsED.cargo_capacity}</div>
                    <div><span class="label5">Consumables:</span>${starshipsED.consumables}</div>
                    <div><span class="label6">Hyperdrive rating:</span>${starshipsED.hyperdrive_rating}</div>
                    <div><span class="label6">MGLT:</span>${starshipsED.MGLT}</div>
                    <div><span class="label6">Starship class:</span>${starshipsED.starship_class}</div>
                    <div><span class="label7">Created:</span>${starshipsED.created}</div>
                    <div><span class="label7">Edited:</span>${starshipsED.edited}</div>
                    <div><span class="label9">Url:</span><a href="${starshipsED.url}" target="_blank">${starshipsED.url}</a></div>
                    <div><span class="label10">________________________________________________________________________________</span></div>
                `).join('')}
            </td>
        </tr>
        <tr>
            <td>Created:</td>
            <td>${data.created}</td>
        </tr>
        <tr>
            <td>Edited:</td>
            <td>${data.edited}</td>
        </tr>
        <tr>
            <td>Url:</td>
            <td><a href="${data.url}" target="_blank">${data.url}</a></td>
        </tr>
        `;
        dataTable.innerHTML = body;
    };

    fetchStar();
});
