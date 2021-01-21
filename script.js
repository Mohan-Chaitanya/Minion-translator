var inputElement = document.querySelector('#input-box')
var buttonEvent = document.querySelector('#btn-translate');
var outputData = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translateURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Duh!! there is an error" + error);
}

function clickHandler (){
    var inputText = inputElement.value;

    fetch(translateURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputData.innerHTML = json.contents.translated;
        })
        .catch(errorHandler);
};

buttonEvent.addEventListener('click', clickHandler);