window.addEventListener("load", function () {

    const form = document.querySelector("form");
    const errorList = document.querySelector("#auth-errors");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = [];

        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        //------------Spaces Validation------------------//

        errors.push(
            ...validateNoSpaces(username, password)
        );

        //------------Password Validation------------------//

        errors.push(
            ...validateLoginPassword(passwordValue)
        );


        //------------Total Errors------------------//

        if (errors.length > 0) {
            renderErrors(errors, errorList);
            return;
        }

        form.submit();
    });
});