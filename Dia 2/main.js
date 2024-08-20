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

//cuando se haga clic en el botón "Agregar Nuevo Estudiante"
function agregarNuevoEstudiante() {
    const nuevoEstudiante = {
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
}

// Llamar a la función para cargar y manejar el JSON
loadAndManageJSON();