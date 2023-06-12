const firstInput = document.querySelector("#firstname");
const displayFirstName = document.querySelector("#display-firstname");
const ageInput = document.querySelector("#age");
const ageSection = document.querySelector("#a-hard-truth");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");
const darkMode = document.querySelector("#toggle-darkmode");

function displayAndStyleInputs() {
  // Name display
  firstInput.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      displayFirstName.textContent = firstInput.value;
    } else {
      displayFirstName.textContent += e.key;
    }
  });

  // age display
  if (ageInput.value >= 18) {
    ageSection.style.visibility = "visible";
  } else {
    ageSection.style.visibility = "hidden";
  }

  // Pwd confirmation and min/max
  pwd.addEventListener("keyup", () => {
    pwd.setAttribute("min", 6);
    pwd.setAttribute("max", 15);
    pwd.required = true;
    if (pwd.value.length < 6) {
      pwd.style.backgroundColor = "red";
      pwd.setCustomValidity(
        "password should be higher than 5 and less than 16."
      );
      pwd.reportValidity();
    } else if (pwd.value.length >= 6) {
      pwd.style.backgroundColor = "";
      pwd.setCustomValidity("");
      pwd.reportValidity();
    }
  });

  pwdConfirm.addEventListener("blur", () => {
    if (pwdConfirm.value !== pwd.value) {
      pwdConfirm.setCustomValidity("Passwords don't match");
      pwdConfirm.reportValidity();
    } else {
      pwd.style.backgroundColor = "green";
      pwdConfirm.style.backgroundColor = "green";
    }
  });

  // Toggle dark mode
  darkMode.addEventListener("change", toggleDarkMode);
}

function toggleDarkMode() {
  darkMode.value === "dark"
    ? (document.body.style.backgroundColor = "black") &&
      (document.body.style.color = "white")
    : (document.body.style.backgroundColor = "white") &&
      (document.body.style.color = "black");
}

displayAndStyleInputs();
