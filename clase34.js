const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }


function obtenerPersonaje(id){

  return new Promise((resolve,reject)=>{
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts,  function(data){
      resolve(data)
    })
    .fail(()=> reject(id))
  })
}

function onError(id){
  console.log(`Hubo  un error con el personaje ${id}`)
}


var ids = [1,2,3,4,5,6,7]

/*
var promesas = ids.map(function(id){
  return obtenerPersonaje(id)
})
Esta funcion es la misma que abajo pero menos lejible
*/


/* De esta forma podemos hacer promesas con un arreglo de promesas de forma paralela*/

var promesas = ids.map(id=> obtenerPersonaje(id))
Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError)

