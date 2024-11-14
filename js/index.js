/*ESTUDIANTE-B
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.

Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los nombres de los estudiantes aprobados.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: nombresDeAprobados.
Parámetros: estudiantes (array de objetos estudiante).
Retorno: array de strings, con los nombres de los estudiantes aprobados.*/

const estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Maria', semestre: 5, nota: 8},
    {nombre: 'Juan', semestre: 6, nota: 15},
    {nombre: 'Luisa', semestre: 6, nota: 7},
    {nombre: 'Pedro', semestre: 7, nota: 18},
    {nombre: 'Ana', semestre: 7, nota: 16},
    {nombre: 'Lucia', semestre: 8, nota: 19},
    {nombre: 'Ricardo', semestre: 8, nota: 7},
    {nombre: 'Camilo', semestre: 9, nota: 10},

]
const nombreAprobados = (estudiantes) => {
    let aprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota >= 10) {
            aprobados.push(estudiantes[i].nombre);
        }
    }
    return aprobados;
}   

let salida = document.getElementById('salida');
salida.innerHTML = "los nombres de los aprobados son: " + JSON.stringify(nombreAprobados(estudiantes));
    