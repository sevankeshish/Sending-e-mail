//variables
const sendBtn = document.querySelector("#sendBtn")


//eventlisteners
eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", appInit)
}


//functions

function appInit() {
    sendBtn.disabled = true;
}