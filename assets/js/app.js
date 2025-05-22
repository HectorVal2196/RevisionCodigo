// URL de la API de GitHub
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;


const $n = document.querySelector('#name'); // se agrega eñ signo de # para indicar que es un id  y pueda ser seleccionado
const $b = document.querySelector('#blog'); // como contenia el # se asigno el id en el html
const $l = document.querySelector('.location'); // se agrego la clase en el html 

// Se agrego async a la función p<ara poder usar await
async function displayUser(username) {
  $n.textContent = 'cargando...';


try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Se agrego await para obtener los datos en formato Json
  console.log(data); // mostrar los datos en la consola

  // Se deben usar backticks en lugar de comillas simples 
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (err) {
  handleError(err);

  } //catch
} //async

function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  $n.textContent = `Algo salió mal: ${err}` // se agrego el $ en la variable para que pueda ser seleccionada
}

displayUser('stolinski'); //se borra el catch que no es necesario porque el try/catch esta dentro