const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", handlerInput);
function handlerInput(event){
    if(textInput.value === " " || "") {
    textInput.value = "Anonymous"} 
         textOutput.innerHTML=textInput.value.trim();
    return;
}

