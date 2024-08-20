const campusJson = `[
    {
        "# de Identificacion": 1093925253,
        "nombres": "Jaime",
        "apellidos": "Barrera",
        "direccion": "Tibu, Barrio La Esperezan #13-35",
        "acudiente": "Rosalba",
        "Fijo": 1234,
        "Telefono": 3123702377,
        "estado": "aprobado",
        "riesgo": "bajo",
        "nota_final": 3.84,
        "ruta_asignada": "java"
    },
    {
        "# de Identificacion": 25489,
        "nombres": "freiler",
        "apellidos": "ortega",
        "direccion": "tibu",
        "acudiente": "no tiene",
        "Fijo": 4567,
        "Telefono": 145987,
        "estado": "aprobado",
        "riesgo": "bajo",
        "nota_final": 3.87,
        "ruta_asignada": "nodejs"
    }
]`;


const campus = JSON.parse(campusJson);


const estudiantes = campus.filter(student => student.nombres && student.apellidos);
console.log('Estudiantes:', estudiantes);


const nuevoEstudiante = {
    "# de Identificacion": 109392543,
    "nombres": "Enrique",
    "apellidos": "Sandoval",
    "direccion": "no tiene",
    "acudiente": "no tiene",
    "Fijo": 153442,
    "Telefono": 3141335,
    "estado": "aprobado",
    "riesgo": "bajo",
    "nota_final": 3.60,
    "ruta_asignada": "nodejs"
};
campus.push(nuevoEstudiante);


const campusUpdatedJson = JSON.stringify(campus, null, 2);
console.log('JSON actualizado:', campusUpdatedJson);




