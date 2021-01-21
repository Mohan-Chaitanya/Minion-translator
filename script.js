var inputElement = document.getElementById('input-box')

var buttonEvent = document.getElementById('btn-translate');

buttonEvent.addEventListener('click', function clickHandler(){
     outputData.innerHTML = 'minionished: ' + inputElement.value;
});

var outputData = document.querySelector('#output');
//console.log(outputData);