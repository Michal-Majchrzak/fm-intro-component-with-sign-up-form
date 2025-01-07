const validationMessages = {
  // ref. => [input attr:name] : message
  "first-name" : "First Name cannot be empty",
  "last-name" : "Last Name cannot be empty",
  "email" : "Looks like this is not an email",
  "password" : "Password cannot be empty"
}

const inputFields = document.querySelectorAll("input.form-item");

inputFields.forEach(input => {
  const label = document.querySelector(`label[for=${input.id}]`);

  // Check if text wasn't already entered into field.
  // This text wouldn't trigger 'input' event before
  // user change something.
  if(input.value != "") {
    label.classList.add("moved");
  }

  input.addEventListener("input", event => {  
    if (event.target.value != "") {
      label.classList.add('moved');
    } else {
      label.classList.remove('moved');
    }
  });

  input.addEventListener("blur", event => {
    const inputName = event.target.name;
    const isValid = event.target.validity.valid;
    const validationTextId = event.target.getAttribute("aria-describedby");
    const message = validationMessages[inputName];
    const validationText = validationTextId ? document.getElementById(validationTextId) : false;
  
    if(validationText && message && !isValid) {
      validationText.innerText = message;
      event.target.classList.add("invalid");
    } else {
      validationText.innerText = "";
      event.target.classList.remove("invalid");
    }
  }, true);
});