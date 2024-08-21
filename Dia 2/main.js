// Función para mostrar el menú
function showMenu() {
    console.log("==== Gestion Academica CampusLands ====" );
    console.log("1. Registrar Camper" );
    console.log("2. Registrar Trainer" );
    console.log("3. Registar Coordinador"  );
    console.log("4. Crear ruta de entrenamiento" );
    console.log( "5. Registar notas de campers (coordinador)" );
    console.log( "6. Asignar campers y traines a rutas" );
    console.log( "7. Generar reportes" );
    console.log( "8. Gestionar matriculas" );
    console.log( "9. Seleccionar horario de trainers" );
    console.log( "0. Salir" );
}

// Función para procesar la opción seleccionada
function processOption() {
    const option = prompt("Seleccione una opción: ");

    switch (option) {
        case "1":
            // Llamar a la función que muestra el formulario de registro de campers
            showCamperRegistrationForm();
            break;
        case "2":
            // Código para registrar un trainer
            console.log("Registrando un nuevo trainer...");
            break;
        case "3":
            // Código para registrar un coordinador
            console.log("Registrando un nuevo coordinador...");
            break;
        // Agrega más
        case "0":
            // Salir del programa
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida. Intente de nuevo.");
            break;
    }
}

// Función para mostrar el formulario de registro de campers
function showCamperRegistrationForm() {
    // Código para mostrar el formulario de registro de campers
    console.log("Mostrando el formulario de registro de campers...");

    // Cargar y manejar el archivo JSON
    async function loadAndManageJSON() {
        try {
            const response = await fetch('campus.json');
            const campusJson = await response.json();
            const campus = campusJson;

            const estudiantes = campus.filter(student => student.nombres && student.apellidos);
            console.log('Estudiantes:', estudiantes);
        } catch (error) {
            console.error('Error al cargar o manejar el JSON:', error);
        }
    }

    const camperForm = document.getElementById('camper-form');

    camperForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nuevoEstudiante = {
            "camper": {
                "# de Identificacion": document.getElementById("identificacion").value,
                "nombres": document.getElementById("nombres").value,
                "apellidos": document.getElementById("apellidos").value,
                "direccion": document.getElementById("direccion").value,
                "acudiente": document.getElementById("acudiente").value,
                "Fijo": document.getElementById("fijo").value,
                "Telefono": document.getElementById("telefono").value,
                "estado": document.getElementById("estado").value,
                "riesgo": document.getElementById("riesgo").value,
                "nota_final": document.getElementById("notaFinal").value,
                "ruta_asignada": document.getElementById("rutaAsignada").value
            }
        };

        fetch('campus.json')
            .then(response => response.json())
            .then(campusJson => {
                const campus = campusJson;
                campus.push(nuevoEstudiante);
                const campusUpdatedJson = JSON.stringify(campus, null, 2);
                console.log('JSON actualizado:', campusUpdatedJson);
            })
            .catch(error => console.error('Error al agregar el estudiante:', error));

        camperForm.reset();
    });

    // Llamar a la función para cargar y manejar el JSON
    loadAndManageJSON();
}

// Iniciar el programa
showMenu();
processOption();