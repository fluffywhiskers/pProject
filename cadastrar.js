// Function to handle form submission
 document.getElementById('home').addEventListener('cadastrar', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get user input values
    const email = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    // Validate email and password (You can add more validation here)
    if (validateEmail(login) && validatePassword(senha)) {
        // Save the user information in local storage (Not secure for production use)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Login successful! User information saved.');
        // You can redirect to another page or perform other actions here.
    } else {
        alert('Invalid email or password.');
    }
});

// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Function to validate password (You can add more rules as needed)
function validatePassword(password) {
    // For example, a simple rule: password should be at least 8 characters long
    return password.length >= 8;
}
document.querySelector("#cadastrar").addEventListener('click', validateEmail, validatePassword);