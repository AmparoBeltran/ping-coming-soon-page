let submitEmail = document.getElementById("submit-email");

submitEmail.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  if (email.value === "") {
    alert("PLease enter a valid email");
  } else {
    alert("This form has been successfully submitted!");
  }

  email.value = "";
});
