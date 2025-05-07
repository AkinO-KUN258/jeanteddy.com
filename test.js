
function setValidationState(element, isValid, message = "") {
    if (isValid) {
        element.innerText = message;
        element.classList.remove("error");
        element.classList.add("valid");
    } else {
        element.innerText = message;
        element.classList.remove("valid");
        element.classList.add("error");
    }
}

// Username validation
function validateUsername() {
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("username_error");
    const pattern = /^[A-Za-z]+$/;

    const value = usernameInput.value.trim();

    if (value === "") {
        setValidationState(usernameError, false, "");
        usernameInput.classList.remove("error", "valid");
    } else if (pattern.test(value) && value.length >= 3) {
        setValidationState(usernameError, true, "");
        usernameInput.classList.remove("error");
        usernameInput.classList.add("valid");
    } else {
        setValidationState(usernameError, false, "Username must be at least 3 letters with only alphabet characters");
        usernameInput.classList.remove("valid");
        usernameInput.classList.add("error");
    }
}

// Password validation
function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password_error");

    const value = passwordInput.value;

    // Regex for password: at least 8 chars, includes uppercase, lowercase, digit, special char
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (value.trim() === "") {
        setValidationState(passwordError, false, "");
        passwordInput.classList.remove("error", "valid");
    } else if (pattern.test(value)) {
        setValidationState(passwordError, true, "");
        passwordInput.classList.remove("error");
        passwordInput.classList.add("valid");
    } else {
        setValidationState(passwordError, false, "Password must be at least 8 characters, include uppercase, lowercase, number, and special character");
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("error");
    }
}

// Attach event listeners
document.getElementById("username").addEventListener('input', validateUsername);
document.getElementById("password").addEventListener('input', validatePassword);