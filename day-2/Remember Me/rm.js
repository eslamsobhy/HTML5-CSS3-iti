var cbInput = document.querySelector("input[type=checkbox]");
var btn = document.querySelector("button");

// data
var nameInput = document.querySelector("input[type=text]");
var emailInput = document.querySelector("input[type=email]");

nameInput.value = localStorage.name;
emailInput.value = localStorage.email;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (cbInput.checked) {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
  } else {
    localStorage.clear();
  }
});

if (nameInput.value == "undefined") {
  nameInput.value = "";
  emailInput.value = "";
}
