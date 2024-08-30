document.addEventListener('DOMContentLoaded', () => {
    const Url = 'https://swapi.py4e.com/api/people/1'; // url API
    const dataTable = document.getElementById('data');

    const fetchStar = () => {
        fetch(Url)
            .then(response => response.json())
            .then(data => {
                return fetch(data.homeworld)
                    .then(homeworldResponse => homeworldResponse.json())
                    .then(homeworldData => {
                        cargarTabla(data, homeworldData);
                    });
            })
            .catch(error => {
                console.error('Error',error);
                dataTable.innerHTML = `<tr><td colspan="2"> Error:${error.message}</td></tr>`;
            });
    };

    const cargarTabla = (data,homeworldData) => {
        const body = `
        <tr>
            <td> Name: </td>
            <td> ${data.name} </td>
        </tr>
        <tr>
            <td> Heigth: </td>
            <td> ${data.height} </td>
        </tr>
        <tr>
            <td> Mass: </td>
            <td> ${data.mass} </td>
        </tr>
        <tr>
            <td> Hair Color: </td>
            <td> ${data.hair_color} </td>
        </tr>
        <tr>
            <td> Skin Color: </td>
            <td> ${data.skin_color} </td>
        </tr>
        <tr>
            <td> Eye Color: </td>
            <td> ${data.eye_color} </td>
        </tr>
        <tr>
            <td> Birth Year: </td>
            <td> ${data.birth_year} </td>
        </tr>
        <tr>
            <td> Gender: </td>
            <td> ${data.gender} </td>
        </tr>
        <tr>
            <td> Homeworld: </td>
            <td>
            <div> <span class="label1">Name:</span>${homeworldData.name} </div>
            <div> <span class="label2">Rotation Period:</span>${homeworldData.rotation_period} </div>
            <div> <span class="label3">Orbital Period:</span>${homeworldData.orbital_period} </div>
            <div> <span class="label4">Diameter:</span>${homeworldData.diameter} </div>
            <div> <span class="label5">Climate:</span>${homeworldData.climate} </div>
            <div> <span class="label6">Gravity:</span>${homeworldData.gravity} </div>
            <div> <span class="label7">Terrain:</span>${homeworldData.terrain} </div>
            <div> <span class="label8">Surface Water:</span>${homeworldData.surface_water} </div>
            <div> <span class="label9">Population:</span>${homeworldData.population} </div>
            <div> <span class="label10">Created:</span>${homeworldData.created} </div>
            <div> <span class="label11">Edited:</span>${homeworldData.edited} </div>
            <div> <span class="label12">Url:</span><a href="${data.homeworld}" target="_blank">https://swapi.py4e.com/api/planets/1/ </div>
            </td>
        </tr>
        `;
        dataTable.innerHTML = body;
    };
    fetchStar();
} )