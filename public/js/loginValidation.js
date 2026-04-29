window.addEventListener("load", function () {

    const form = document.querySelector("form");

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errores = [];

        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        //------------Spaces Validation------------------//

        errores.push(
            ...validateNoSpaces(username, password)
        );

        //------------Password Validation------------------//

        errores.push(
            ...validatePassword(passwordValue, passwordValue)
        );


        //------------Total Errors------------------//

        if (errores.length > 0) {
            console.log(errores);
            return;
        }

        form.submit();
    });
});