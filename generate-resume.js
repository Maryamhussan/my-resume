var resumeOutput = document.getElementById("resume-output");
var resumeContent = document.getElementById("resume-content");
var editResumeBtn = document.getElementById("edit-resume-btn");
function generateResume() {
    var name = prompt("Enter your full name:");
    var email = prompt("Enter your email:");
    var about = prompt("Tell us about yourself:");
    var skills = prompt("Enter your skills (comma-separated):");
    var portfolio = prompt("Enter your portfolio link (optional):");
    var resumeHTML = "\n        <p><strong>Name:</strong> ".concat(name || "Not provided", "</p>\n        <p><strong>Email:</strong> ").concat(email || "Not provided", "</p>\n        <p><strong>About:</strong> ").concat(about || "Not provided", "</p>\n        <p><strong>Skills:</strong> ").concat(skills || "Not provided", "</p>\n        <p><strong>Portfolio:</strong> ").concat(portfolio
        ? "<a href=\"".concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a>")
        : "Not provided", "</p>\n    ");
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = "block";
    editResumeBtn.style.display = "inline-block";
}
function editResume() {
    resumeOutput.style.display = "none";
    generateResume();
}
editResumeBtn.addEventListener("click", editResume);
document.addEventListener("DOMContentLoaded", generateResume);
