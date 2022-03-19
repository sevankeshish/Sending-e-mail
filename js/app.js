//variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form");

//eventlisteners
eventListeners();

function eventListeners() {
  //app initialization
  document.addEventListener("DOMContentLoaded", appInit);
  //validating fields
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  //reset btn
  resetBtn.addEventListener("click", reset);

  //submit form and show gif
  form.addEventListener("submit", submitEmail);
}

//functions

function appInit() {
  //disabled send button on load
  sendBtn.disabled = true;
}

//sending email and submitting the form
function submitEmail(e) {
  e.preventDefault();

  //show the spinner
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  //create the second gif
  const sendEmailImg = document.createElement("img");
  console.log(sendEmailImg);
  sendEmailImg.src = "img/mail.gif";
  sendEmailImg.style.display = "block";
  //   console.log(sendEmailImg);

  //show the email send image
  setTimeout(function () {
    //hide the first spinner
    spinner.style.display = "none";

    //append image to HTML
    const loaders = document.querySelector("#loaders");
    loaders.appendChild(sendEmailImg);

    //reset form and remove
    setTimeout(() => {
      reset();
      sendEmailImg.remove();
    }, 5000);
  }, 3000);
}

//validating forms' field
function validateField() {
  // console.log("true");
  // console.log(this);

  //validate length of fields
  validateLength(this);

  //validate email field
  if (this.type === "email") {
    // console.log("email");
    validateEmail(this);
  }

  let error = document.querySelectorAll(".error");
  //    console.log(error);
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

//validate length of fields
function validateLength(field) {
  if (field.value.length > 0) {
    // console.log("true");
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    // console.log("false");
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

//validate email field contains @
function validateEmail(field) {
  // console.log(field.value);
  const emailText = field.value;
  if (emailText.includes("@")) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    // console.log("false");
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

//reset form with button
function reset() {
  form.reset();
}
