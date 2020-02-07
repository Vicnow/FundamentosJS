function heradeDE(protoHijo,protoPadre){
  var fn = function(){}
  fn.prototype = protoPadre.prototype
  protoHijo.prototype = new fn
  protoHijo.prototype.constructor = protoHijo
}

function Persona(nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura  = altura
  return this
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    if (this.altura >= 1.8) {
      console.log(`Soy alto B)`);
    }else {
      console.log(`NO soy alto :(`);
    }
    return this.altura >= 1.8
}

function Desarrollador(nombre,apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heradeDE(Desarrollador,Persona)

Desarrollador.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
}




var victor = new Desarrollador("Victor","Morales",1.8)
var leo = new Persona("Leonardo","Mendoza",1.5)
