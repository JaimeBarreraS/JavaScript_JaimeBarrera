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
        "informacion_personal": {
            "nombre": document.getElementById("nombre").value,
            "edad": document.getElementById("edad").value,
            "direccion": {
                "calle": document.getElementById("calle").value,
                "numero": document.getElementById("numero").value,
                "ciudad": document.getElementById("ciudad").value,
            },
            "contacto": {
                "correo": document.getElementById("correo").value,
                "telefono": document.getElementById("telefono").value,
            }
        },
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": document.getElementById("instituto1").value,
                "anio_inicio": document.getElementById("anio_inicio1").value,
                "anio_fin": document.getElementById("anio_fin1").value,
            },
            {
                "nivel": "Universidad",
                "institucion": document.getElementById("instituto2").value,
                "titulo": document.getElementById("titulo").value,
                "anio_inicio": document.getElementById("anio_inicio2").value,
                "anio_fin": document.getElementById("anio_inicio2").value,
            }
        ],
        "experiencia_laboral": [
            {
                "puesto": document.getElementById("puesto1").value,
                "empresa": document.getElementById("empresa1").value,
                "periodo": document.getElementById("periodo1").value,
                "responsabilidades": [
                    document.getElementById("responsabilidad1").value,
                ]
            },
            {
                "puesto": document.getElementById("puesto2").value,
                "empresa": document.getElementById("empresa2").value,
                "periodo": document.getElementById("periodo2").value,
                "responsabilidades": [
                    document.getElementById("responsabilidad2").value,
                ]
            }
        ]
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