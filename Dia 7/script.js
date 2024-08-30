document.addEventListener('DOMContentLoaded', () => {
    const Url = 'https://swapi.py4e.com/api/people/1'; // url API
    const dataTable = document.getElementById('data');

    const fetchStar = () => {
        fetch(Url)
            .then(response => response.json())
            .then(data => {
                cargarTabla(data);
            })
            .catch(error => {
                console.error('Error',error);
                dataTable.innerHTML = `<tr><td colspan="2"> Error:${error.message}</td></tr>`;
            });
    };

    const cargarTabla = (data) => {
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
            <span class="label">Name:</span>${data.homeworld}
            <a href="${data.homeworld}" target="_blank">https://swapi.py4e.com/api/planets/1/ </a>
            </td>
        </tr>
        `;
        dataTable.innerHTML = body;
    };
    fetchStar();
} )