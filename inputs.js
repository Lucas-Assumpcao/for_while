const elemento = {
    input:document.querySelector ('#color'),
    container : document.querySelector('#container'),
};

console.log(elemento);

elemento.input.addEventListener('input', (evento) => {
    console.log(evento.currentTarget.value);

    elemento.container.style.backgroundColor = evento.currentTarget.value;

});