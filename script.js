
var inp1 = document.createElement('input');
var inp2 = document.createElement('input');

inp1.style.width = '200px';

inp1.style.border = '1px solid black';
inp1.style.padding = '5px';
inp1.setAttribute('placeholder' , 'USD')
inp1.setAttribute('type' , 'number')

document.getElementById('inputsGroup').appendChild(inp1);

inp2.style.width = '200px';

inp2.style.border = '1px solid black';

inp2.style.padding = '5px';
inp2.setAttribute('placeholder' , 'EGP')
inp2.setAttribute('type' , 'number')
inp2.setAttribute('id' , 'input2')
document.getElementById('inputsGroup').appendChild(inp2)

inp1.addEventListener('keyup', ()=> {
    value = ''
    inp2.value = (inp1.value * 50)
})
inp2.addEventListener('keyup', ()=> {
    value = ''
    var result =inp1.value = (inp2.value / 50 ) ;
    return result;
})