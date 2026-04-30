function validateNoSpaces(...fields) {
    let errors = [];

    fields.forEach(field => {
        if (field.value !== field.value.trim()) {
            errors.push(`El campo "${field.name || "input"}" no debe tener espacios al inicio o final`);
        }
    });

    return errors;
}

function validateEmail(emailValue, emailRegex) {
    let errors = [];

    if (emailValue !== emailValue.trim()) {
        errors.push("El email no debe tener espacios al inicio o final");
    }

    if (emailValue === "") {
        errors.push("Email obligatorio");
    } else if (!emailRegex.test(emailValue)) {
        errors.push("Email inválido");
    }

    return errors;
}

function validateRegisterPassword(passwordValue, repeatPasswordValue = null, emailValue = null) {
    let errors = [];

    if (passwordValue !== passwordValue.trim()) {
        errors.push("La contraseña no debe tener espacios al inicio o final");
    }

    if (passwordValue === "") {
        errors.push("Contraseña obligatoria");
    }

    if (repeatPasswordValue !== null && repeatPasswordValue === "") {
        errors.push("Repetir contraseña obligatoria");
    }

    if (repeatPasswordValue !== null && passwordValue !== repeatPasswordValue) {
        errors.push("Las contraseñas no coinciden");
    }

    if (passwordValue.length < 8) {
        errors.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (!/[a-zA-Z]/.test(passwordValue)) {
        errors.push("Debe contener al menos una letra");
    }

    if (!/\d/.test(passwordValue)) {
        errors.push("Debe contener al menos un número");
    }

    const especial = /[!@#$%^&*(),.?":{}|<>]/;
    if (!especial.test(passwordValue)) {
        errors.push("Debe contener al menos un carácter especial");
    }

    const prohibidas = [
        "password",
        "1234",
        "qwerty",
        "miecommerce"
    ];

    if (prohibidas.some(p => passwordValue.toLowerCase().includes(p))) {
        errors.push("La contraseña contiene una palabra no permitida");
    }

    if (emailValue && passwordValue === emailValue) {
        errors.push("La contraseña no puede ser igual al email");
    }

    return errors;
}

function validateLoginPassword(passwordValue) {
    let errors = [];

    if (passwordValue !== passwordValue.trim()) {
        errors.push("La contraseña no debe tener espacios al inicio o final");
    }

    if (passwordValue === "") {
        errors.push("Contraseña obligatoria");
    }

    if (passwordValue.length < 8) {
        errors.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (!/[a-zA-Z]/.test(passwordValue)) {
        errors.push("Debe contener al menos una letra");
    }

    if (!/\d/.test(passwordValue)) {
        errors.push("Debe contener al menos un número");
    }

    const especial = /[!@#$%^&*(),.?":{}|<>]/;
    if (!especial.test(passwordValue)) {
        errors.push("Debe contener al menos un carácter especial");
    }

    return errors;
}



function renderErrors(errors, errorListElement) {
    if (!errorListElement) return;

    errorListElement.innerHTML = "";

    errorListElement.innerHTML = errors
        .map(error => `<li>${error}</li>`)
        .join("");
}