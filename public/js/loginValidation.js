window.addEventListener("load", function () {

    const form = document.querySelector("form");

    const email = document.querySelector("#username");
    const password = document.querySelector("#password");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = [];

        if (email.value.trim() === "") {
            errores.push("Email obligatorio");
        }

        if (password.value.trim() === "") {
            errores.push("Contraseña obligatoria");
        }

        if (errores.length > 0) {
            console.log(errores);
        } else {
            form.submit();
        }
    });

});