

class Estudiante {
    constructor(nombre, asignaturas){
        this.nombre=nombre
        this.asignaturas=asignaturas
    }
    obtenDatos(){
return this.nombre, this.asignaturas
}
    
    }

const nuevoEstudiante = new Estudiante("Leandro", "Javascript, HTML, CSS")
console.log(nuevoEstudiante)

let estudiante2 = new Estudiante("Carlos", "JS, Html, Css")
console.log(typeof estudiante2)
console.log(estudiante2.obtenDatos())

console.log(estudiante2 instanceof Estudiante)
