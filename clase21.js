function Persona(nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura  = altura
  return this
}

Persona.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    if (this.altura >= 1.8) {
      console.log(`Soy alto B)`);
    }else {
      console.log(`NO soy alto :(`);
    }
}

var victor = new Persona("Victor","Morales",1.8)
var leo = new Persona("Leonardo","Mendoza",1.5)
