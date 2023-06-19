function clearForm() {
    document.getElementById("studentForm").reset();
}

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Getting form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = new Date(document.getElementById("dob").value);
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("school").value.toUpperCase();
    var board = document.getElementById("board").value;
    var grade = document.getElementById("grade").value;

    // age (might be useful)
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // constraints
    if (age >= 20) {
        displayError("Age must be below 19!");
        return;
    }

    if (!isValidEmail(email)) {
        displayError("Invalid email format!");
        return;
    }

    if (!isValidPhoneNumber(phone)) {
        displayError("Invalid phone number format!");
        return;
    }

    var currentYear = today.getFullYear();
    if (dob.getFullYear() > currentYear) {
        displayError("Invalid date of birth!");
        return;
    }

    // printing the student details (in wev console)
    console.log("Student Details:");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Date of Birth:", dob.toDateString());
    console.log("Email ID:", email);
    console.log("Phone Number:", phone);
    console.log("School Name:", school);
    console.log("Board:", board);
    console.log("Grade:", grade);

    clearError();
});

function displayError(message) {
    var errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = message;
    document.getElementById("studentForm").appendChild(errorElement);
}

function clearError() {
    var errorElement = document.querySelector(".error-message");
    if (errorElement) {
        errorElement.remove();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    var phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
}
