window.addEventListener("load", function () {

    const form = document.querySelector("form");

    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const repeatPassword = document.querySelector("#repeatPassword");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = [];

        if (email.value.trim() === "") {
            errores.push("Email obligatorio");
        }

        if (password.value.trim() === "") {
            errores.push("Contraseña obligatoria");
        }

        if (repeatPassword.value.trim() === "") {
            errores.push("Repetir contraseña obligatoria");
        }

        if (password.value !== repeatPassword.value) {
            errores.push("Las contraseñas no coinciden");
        }

        if (errores.length > 0) {
            console.log(errores);
        } else {
            form.submit();
        }
    });

});