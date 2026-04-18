const elemento = {
    input:document.querySelector ('#color'),
    container : document.querySelector('#container'),
    inputs:document.querySelector('#text'),
};

console.log(elemento.inputs);


elemento.input.addEventListener('input', (evento) => {
    console.log(evento.currentTarget.value);
    

    elemento.container.style.backgroundColor = evento.currentTarget.value;

});

elemento.inputs.addEventListener('input', (evento) => {
    console.log(evento.currentTarget.value);

    

    elemento.container.innerText = evento.currentTarget.value;

});
