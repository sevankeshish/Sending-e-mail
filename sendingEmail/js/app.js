//variables
const sendBtn = document.querySelector("#sendBtn"),
    email = document.querySelector("#email"),
    subject = document.querySelector("#subject"),
    message = document.querySelector("#message"),
    resetBtn = document.querySelector("#resetBtn"),
    form = document.querySelector("#email-form")

//eventlisteners
eventListeners()

function eventListeners() {
    document.addEventListener("DOMContentLoaded", appInit)
    email.addEventListener("blur", validateField)
    subject.addEventListener("blur", validateField)
    message.addEventListener("blur", validateField)
    resetBtn.addEventListener("click", reset)
    form.addEventListener('submit', submitEmail)
}


//functions

function appInit() {
    sendBtn.disabled = true;
}

function submitEmail(e) {
    e.preventDefault()

    const spinner = document.getElementById("spinner")
    spinner.style.display = "block"

    const sendEmailImg = document.createElement("img")
    // console.log(sendEmailImg);
    sendEmailImg.src = "../img/mail.gif"
    sendEmailImg.style.display = "block"
    console.log(sendEmailImg);


    setTimeout(() => {
        spinner.style.display = "none"

        const loaders = document.querySelector("#loaders")
        loaders.appendChild(sendEmailImg)
        setTimeout(() => {
            resetForm()
            sendEmailImg.remove()
        }, 5000);

    }, 3000);
}

function validateField() {
    // console.log("true");
    // console.log(this);

    validateLength(this)
    if (this.type === "email") {
        // console.log("email");
        validateEmail(this)
    }

    let error = document.querySelectorAll(".error")
    //    console.log(error);
    if (email.value !== " " && subject.value !== " " && message.value !== " ") {
        if (error.length === 0) {
            sendBtn.disabled = false
        }
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
    // console.log(field.value);
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

function reset() {
    form.reset()
}