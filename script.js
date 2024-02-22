const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Registration Data:", name, surname, age, email, username, password);
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    console.log("Login Data:", loginUsername, loginPassword);
});

const overlay = document.querySelector('.overlay');
document.body.classList.toggle('dark-mode');
overlay.addEventListener('click', function() {
   document.body.classList.toggle('dark-mode');
});
