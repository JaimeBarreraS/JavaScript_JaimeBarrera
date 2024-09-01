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
                        const filmPromises = filmUrls.map(filmUrl => 
                            fetch(filmUrl).then(filmResponse => filmResponse.json())
                        );
                        const speciesUrls = [
                            'https://swapi.py4e.com/api/species/1/'
                        ];
                        const speciesPromises = speciesUrls.map(speciesUrl => 
                            fetch(speciesUrl).then(speciesResponse => speciesResponse.json())
                        );

                        return Promise.all([Promise.all(filmPromises), Promise.all(speciesPromises)])
                            .then(([films, species]) => {
                                cargarTabla(data, homeworldData, films, species);
                            });
                    });
            })
            .catch(error => {
                console.error('Error:', error);
                dataTable.innerHTML = `<tr><td colspan="2"> Error: ${error.message} </td></tr>`;
            });
    };

    const cargarTabla = (data, homeworldData, films, species ) => {
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
        `;
        dataTable.innerHTML = body;
    };

    fetchStar();
});
