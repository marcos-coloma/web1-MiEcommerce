window.addEventListener("load", function () {

    const form = document.querySelector("form");

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const repeatPassword = document.querySelector("#repeatPassword");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//----------------Submit----------------------//

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = [];

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const repeatPasswordValue = repeatPassword.value.trim();


//------------Email Validations------------------//

errores.push(
    ...validateEmail(emailValue, emailRegex)
);

//------------Password Validations------------------//

errores.push(
    ...validatePassword(passwordValue, repeatPasswordValue, emailValue)
);

//------------Total Errors------------------//

        if (errores.length > 0) {
            console.log(errores);
            return;
        }

        form.submit();
    });
});