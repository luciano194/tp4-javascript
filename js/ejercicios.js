
// a) Calcular promedio con reduce
const calcularPromedio = (notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
};

// Prueba
console.log("Promedio:", calcularPromedio([8, 7, 9, 6]));


// b) Filtrar aprobados (nota >= 6)
const filtrarAprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota >= 6);
};

// Prueba
const alumnos = [
    { nombre: "Juan", nota: 8 },
    { nombre: "Ana", nota: 5 },
    { nombre: "Luis", nota: 6 },
];

console.log("Aprobados:", filtrarAprobados(alumnos));


// c) Formatear alumnos con map
const formatearAlumnos = (alumnos) => {
    return alumnos.map(alumno => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`);
};

// Prueba
console.log("Formateados:", formatearAlumnos(alumnos));


// d) Buscar alumno por nombre con find
const buscarAlumno = (alumnos, nombre) => {
    return alumnos.find(alumno => alumno.nombre === nombre);
};

// Prueba
console.log("Buscar alumno:", buscarAlumno(alumnos, "Ana"));