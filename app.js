function formAlert(textbox) {
  if (textbox.value === "") {
    document.querySelector("#alert").style.visibility = "visible";
    document.querySelector(".error-text").style.display = "block";
    textbox.setCustomValidity("");
  } else if (textbox.validity.typeMismatch) {
    document.querySelector("#alert").style.visibility = "visible";
    document.querySelector(".error-text").style.display = "block";
    textbox.setCustomValidity("");
  } else {
    textbox.setCustomValidity("");
  }

  return true;
}

setTimeout(formAlert, 3000);
