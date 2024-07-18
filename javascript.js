let abrir = document.getElementById('open-menu');
let navMov = document.getElementById('nav-responsive');
let ocultar = document.getElementById('ocultar');
let mostrarQuejas = document.getElementById('mostrar-quejas');
let quejas = document.getElementById('quejas');
let ocultarQuejas = document.getElementById('ocultar-quejas');
let abrirClientes = document.getElementById('clientes-2');
let mostrarClientes = document.getElementById('caja-clientes');

abrir.addEventListener('click', () => {

    navMov.classList.add('mostrar');
})

ocultar.addEventListener('click', () => {

    navMov.classList.remove('mostrar');
})

// Modal de quejas

// mostrarQuejas.addEventListener('click', ()=>{

//     quejas.classList.add('mostrar');
// })

// ocultarQuejas.addEventListener('click', ()=>{

//     quejas.classList.remove('mostrar');
// })

abrirClientes.addEventListener('click', () => {

    mostrarClientes.classList.add('mostrar-clientes');

});



const link = document.getElementById('link');
const fb = document.getElementById('fb');
const hola = document.getElementById('hola');
const adios = document.getElementById('adios');

hola.addEventListener('click', () => {
    link.classList.add('hola');
    fb.classList.add('adios');
});

adios.addEventListener('click', () => {
    fb.classList.remove('adios');
    link.classList.remove('hola');
});