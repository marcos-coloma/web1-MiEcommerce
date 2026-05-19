window.addEventListener("load", function () {

    const form = document.querySelector("#login-form");
    if (!form) return;

    const errorList = form.querySelector("#auth-errors");
    const username = form.querySelector("#username");
    const password = form.querySelector("#password");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        // Espacios
        errors.push(...validateNoSpaces(username, password));

        // Usuario obligatorio
        if (usernameValue === "") {
            errors.push("Usuario obligatorio");
        }

        // Password
        errors.push(...validateLoginPassword(passwordValue));

        if (errors.length > 0) {
            renderErrors(errors, errorList);
            return;
        }

        form.submit();
    });
});