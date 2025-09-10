class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }

    imrimir(){
        console.log(`${this.nombre},${this.nombre}`);
    }
}

let persona:Persona;
persona = new Persona("Tony",45)
persona.imrimir();





