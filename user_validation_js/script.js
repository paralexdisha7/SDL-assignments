$(document).ready(function() {
    $("#submitBtn").on("click", function() {
        // Get input values
        var name = $("#name").val();
        var password = $("#password").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var address = $("#address").val();

        // Validate name (only alphabets)
        var nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(name)) {
            alert("Please enter a valid name (only alphabets).");
            return;
        }

        // Validate password (minimum 6 characters)
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Validate phone number (numeric, 10 digits)
        var phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate address (non-empty)
        if (address.trim() === "") {
            alert("Please enter your address.");
            return;
        }

        // If all validations pass, you can proceed with form submission or other actions
        alert("Form submitted successfully!");
    });
});
