document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(validateInput(username, password)) {
        // Hide the login section
        document.getElementById("loginSection").style.display = "none";
        // Show the success section
        document.getElementById("successSection").style.display = "block";
    }
});

function validateInput(username, password) {
    if(username === "" || password === "") {
        alert("Both fields are required!");
        return false;
    }

    if(password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }

    return true;
}
