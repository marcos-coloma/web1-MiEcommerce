function validateNoSpaces(...fields) {
    let errores = [];

    fields.forEach(field => {
        if (field.value !== field.value.trim()) {
            errores.push(`El campo "${field.name || "input"}" no debe tener espacios al inicio o final`);
        }
    });

    return errores;
}

function validateEmail(emailValue, emailRegex) {
    let errores = [];

    if (emailValue !== emailValue.trim()) {
        errores.push("El email no debe tener espacios al inicio o final");
    }

    if (emailValue === "") {
        errores.push("Email obligatorio");
    } else if (!emailRegex.test(emailValue)) {
        errores.push("Email inválido");
    }

    return errores;
}

function validatePassword(passwordValue, repeatPasswordValue = null, emailValue = null) {
    let errores = [];

    if (passwordValue !== passwordValue.trim()) {
        errores.push("La contraseña no debe tener espacios al inicio o final");
    }

    if (passwordValue === "") {
        errores.push("Contraseña obligatoria");
    }

    if (repeatPasswordValue !== null && repeatPasswordValue === "") {
        errores.push("Repetir contraseña obligatoria");
    }

    if (repeatPasswordValue !== null && passwordValue !== repeatPasswordValue) {
        errores.push("Las contraseñas no coinciden");
    }

    if (passwordValue.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (!/[a-zA-Z]/.test(passwordValue)) {
        errores.push("Debe contener al menos una letra");
    }

    if (!/\d/.test(passwordValue)) {
        errores.push("Debe contener al menos un número");
    }

    const especial = /[!@#$%^&*(),.?":{}|<>]/;
    if (!especial.test(passwordValue)) {
        errores.push("Debe contener al menos un carácter especial");
    }

    const prohibidas = [
        "password",
        "1234",
        "qwerty",
        "miecommerce"
    ];

    if (prohibidas.some(p => passwordValue.toLowerCase().includes(p))) {
        errores.push("La contraseña contiene una palabra no permitida");
    }

    if (emailValue && passwordValue === emailValue) {
        errores.push("La contraseña no puede ser igual al email");
    }

    return errores;
}