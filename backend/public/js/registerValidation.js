window.addEventListener("load", function () {

    const form = document.querySelector("#register-form");
    if (!form) return;

    const errorList = form.querySelector("#auth-errors");
    const email = form.querySelector("#email");
    const password = form.querySelector("#password");
    const repeatPassword = form.querySelector("#repeatPassword");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const repeatPasswordValue = repeatPassword.value.trim();

        // Email
        errors.push(...validateEmail(emailValue, emailRegex));

        // Password
        errors.push(...validateRegisterPassword(passwordValue, repeatPasswordValue, emailValue));

        if (errors.length > 0) {
            renderErrors(errors, errorList);
            return;
        }

        form.submit();
    });
});