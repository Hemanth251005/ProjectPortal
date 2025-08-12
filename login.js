document.addEventListener("DOMContentLoaded", () => {
    const roleSelect = document.getElementById("role");
    const batchField = document.getElementById("batch-field");

    // Show batch input for students only
    roleSelect.addEventListener("change", () => {
        batchField.style.display = roleSelect.value === "student" ? "block" : "none";
    });

    // Login form handling
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = roleSelect.value;
        const batch = document.getElementById("batch").value.trim();

        const studentPassword = "student123";
        const facultyPassword = "faculty123";

        if (role === "student") {
            if (password === studentPassword && batch !== "") {
                localStorage.setItem("role", "student");
                localStorage.setItem("username", username);
                localStorage.setItem("batch", batch);
                window.location.href = "projects.html";
            } else {
                alert("Invalid student credentials or missing batch number.");
            }
        } else if (role === "faculty") {
            if (password === facultyPassword) {
                localStorage.setItem("role", "faculty");
                localStorage.setItem("username", username);
                window.location.href = "projects.html";
            } else {
                alert("Invalid faculty credentials.");
            }
        } else {
            alert("Please select a role.");
        }
    });
});
