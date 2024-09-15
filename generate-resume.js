// Define types for form fields
var resumeOutput = document.getElementById("resume-output");
var resumeContent = document.getElementById("resume-content");
var editResumeBtn = document.getElementById("edit-resume-btn");
// Function to generate resume content
function generateResume() {
    var name = prompt("Enter your full name:");
    var email = prompt("Enter your email:");
    var about = prompt("Tell us about yourself:");
    var skills = prompt("Enter your skills (comma-separated):");
    var portfolio = prompt("Enter your portfolio link (optional):");
    // Generate HTML content for the resume
    var resumeHTML = "\n        <p><strong>Name:</strong> ".concat(name || "Not provided", "</p>\n        <p><strong>Email:</strong> ").concat(email || "Not provided", "</p>\n        <p><strong>About:</strong> ").concat(about || "Not provided", "</p>\n        <p><strong>Skills:</strong> ").concat(skills || "Not provided", "</p>\n        <p><strong>Portfolio:</strong> ").concat(portfolio
        ? "<a href=\"".concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a>")
        : "Not provided", "</p>\n    ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = "block"; // Show the resume section
    editResumeBtn.style.display = "inline-block"; // Show the edit button
}
// Function to handle editing the resume
function editResume() {
    resumeOutput.style.display = "none"; // Hide the resume section
    generateResume(); // Call the resume generation function again
}
// Add event listener to the "Edit Resume" button
editResumeBtn.addEventListener("click", editResume);
// Call the generateResume function when the page loads
document.addEventListener("DOMContentLoaded", generateResume);
