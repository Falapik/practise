const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const body = document.body;
const form1 = document.querySelector(".form_signup");
const form2 = document.querySelector(".form_signin");
const passwordInput1 = form1.querySelector('input[type="password"]');
const passwordInput2 = form2.querySelector('input[type="password"]');
const warningElement = document.querySelector(".form__warning");
const warningElement1 = document.querySelector(".form__warning1");
const formSignup = document.querySelector(".form_signup");
const passwordInput = form1.querySelector('input[type="password"]');
const confirmPasswordInput = form1.querySelector(
  'input[placeholder="Подтвердите пароль"]'
);
const warningDouble = form1.querySelector(".form__warning-double");

signUpBtn.addEventListener("click", function () {
  formBox.classList.add("active");
  body.classList.add("active");
});

signInBtn.addEventListener("click", function () {
  formBox.classList.remove("active");
  body.classList.remove("active");
});

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput1.value.length >= 8) {
    form1.submit();
    warningElement1.classList.remove("active");
  } else {
    warningElement1.classList.add("active");
  }
});

form2.addEventListener("submit", function () {
  if (passwordInput2.value.length >= 8) {
    form2.submit();
    warningElement.classList.remove("active");
  } else {
    warningElement.classList.add("active");
  }
});

confirmPasswordInput.addEventListener("input", () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    warningDouble.classList.add("active");
  } else {
    warningDouble.classList.remove("active");
  }
});
