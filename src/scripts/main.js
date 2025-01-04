const inputFields = document.querySelectorAll("input.form-item");
const submitBtn = document.querySelector(".btn[type=submit]");

inputFields.forEach(input => {
  // Check if some text already was instered into input
  if(input.value != "") {
    input.labels[0].classList.add("moved");
  }

  // Subscribe to event 'input'
  input.addEventListener("input", event => {
    if(event.target.value != "") {
      event.target.labels[0].classList.add("moved");
    } else {
      event.target.labels[0].classList.remove("moved");
    }
  });
});

submitBtn.addEventListener("click", event => {
  inputFields.forEach(field => {
    if (field.checkValidity() == false) {
      field.parentNode.classList.add("error");
      field.parentNode.getElementsByClassName("validation-message")[0].classList.remove("sr-only");
    } else {
      field.parentNode.classList.remove("error");
      field.parentNode.getElementsByClassName("validation-message")[0].classList.add("sr-only");
    }
  });
});