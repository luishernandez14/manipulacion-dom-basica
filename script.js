const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


//btn.addEventListener('click', buttonOnClick);
// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     event.preventDefault();
//     suma = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = `Resultado es ${suma}`;
    
// }

form.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    suma = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `Resultado es ${suma}`;
    
}