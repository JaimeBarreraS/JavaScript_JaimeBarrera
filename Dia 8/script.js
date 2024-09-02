document.addEventListener('DOMContentLoaded', () => {
    const Url = 'https://pokeapi.co/api/v2/pokemon/132'; // url API
    const datagit = document.getElementById('data');

    const fetchStar = () => {
        fetch(Url)
            .then(response => response.json())
            .then(gif => {
                git(gif);
            })
    };

    const git = (gif) => {
        const body = `
        <tr>
            <td>${gif.showdown.front_default}</td>
        </tr>
        `;
        dataTable.innerHTML = body;
    };
    fetchStar();
} )