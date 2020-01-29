var persona = {
    nombre : 'victor',
    apellido : 'morales',
    edad : 20
}

function imprimirDatos(persona) {
    var name = (persona.nombre + ' ' + persona.apellido).toUpperCase();
    var age = persona.edad;
    console.log(`${name} tiene ${age} inviernos`);
}

imprimirDatos(persona);