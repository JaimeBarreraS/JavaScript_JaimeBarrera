function Menu(){
    console.log("1. Crear");
    console.log("2. Añadir");
    console.log("3. Eliminar");
    console.log("4. Actualizar");
    console.log("0. Salir");
}
function optio_menu() {
    const option = prompt("Seleccione una opción: ");

    switch (option){
        case "1":
            console.log("Crear")
            Crear();
            break;
        case "2":
            console.log("Añadir")
            Añadir();
            break;
        case "3":
            console.log("Eliminar")    
            Eliminar();
            break;
        case "4":
            console.log("Salir")
            Salir();
            break;
    }
}

function Crear(){
    console.log("Formulario de registro")

    async function loadJSON(){
            const response = await fetch('data.json');
            const dataJson = await response.json();
    }

    const dataForm = document.getElementById('data-form');

    dataForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nuevoData = {
            "nombre":document.getElementById("nombre").value, 
            "edad":document.getElementById("edad").value, 
        }

        fetch('data.json')
            .then(response => response.json())
            .then(dataJson => {
                const data = dataJson;
                data.push(nuevoData);
                const dataUpdatedJson = JSON.stringify(data, null, 2);
                console.log('JSON actualizado:', dataUpdatedJson);
            })
            .catch(error => console.error('Error al agregar el estudiante:', error));

        dataForm.reset();

    });
    loadJSON();
}

Menu()
optio_menu()