window.addEventListener("load", function () {

    const form = document.querySelector("form");
    const errorList = document.querySelector("#auth-errors");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const repeatPassword = document.querySelector("#repeatPassword");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//----------------Submit----------------------//

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const repeatPasswordValue = repeatPassword.value.trim();


//------------Email Validations------------------//

errors.push(
    ...validateEmail(emailValue, emailRegex)
);

//------------Password Validations------------------//

errors.push(
    ...validateRegisterPassword(passwordValue, repeatPasswordValue, emailValue)
);

//------------Total Errors------------------//

        if (errors.length > 0) {
            renderErrors(errors, errorList);
            return;
        }

        form.submit();
    });
});