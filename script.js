document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Generate TrustedForm token (example, integrate with real API later)
        let tfToken = "example-trusted-form-token"; 

        console.log("TrustedForm Token:", tfToken);

        alert("Form submitted! TrustedForm Token: " + tfToken);
    });
});