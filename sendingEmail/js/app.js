//variables
const sendBtn = document.querySelector("#sendBtn"),
    email = document.querySelector("#email"),
    subject = document.querySelector("#subject"),
    message = document.querySelector("#message")

//eventlisteners
eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", appInit)
    email.addEventListener("blur", validateField)
    subject.addEventListener("blur", validateField)
    message.addEventListener("blur", validateField)
}


//functions

function appInit() {
    sendBtn.disabled = true;
}

function validateField() {
    // console.log("true");
    // console.log(this);

    validateLength(this)
    if (this.type === "email") {
        // console.log("email");
        validateEmail(this)
    }
}

function validateLength(field) {
    if (field.value.length > 0) {
        // console.log("true");
        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {
        // console.log("false");
        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }
}

function validateEmail(field) {
console.log(field.value);
    const emailText = field.value
    if (emailText.includes("@")) {
        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {
        // console.log("false");
        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }

}