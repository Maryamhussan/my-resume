document.addEventListener("DOMContentLoaded", function () {
    var resumeOutput = document.getElementById("resume-output");
    var resumeContent = document.getElementById("resume-content");
    var editResumeBtn = document.getElementById("edit-resume-btn");
    var generateResumeBtn = document.getElementById("generate-resume-btn");
    var resumeForm = document.getElementById("resumeForm");
    if (!resumeOutput ||
        !resumeContent ||
        !editResumeBtn ||
        !generateResumeBtn ||
        !resumeForm) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }
    function generateResume() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var about = document.getElementById("about")
            .value;
        var skills = document.getElementById("skills")
            .value;
        var experience = document.getElementById("experience").value;
        var portfolio = document.getElementById("portfolio")
            .value;
        var resumeHTML = "\n      <p><strong>Name:</strong> ".concat(name || "Not provided", "</p>\n      <p><strong>Email:</strong> ").concat(email || "Not provided", "</p>\n      <p><strong>About:</strong> ").concat(about || "Not provided", "</p>\n      <p><strong>Skills:</strong> ").concat(skills || "Not provided", "</p>\n      <p><strong>Experience:</strong> ").concat(experience || "Not provided", "</p>\n      <p><strong>Portfolio:</strong> ").concat(portfolio
            ? "<a href=\"".concat(portfolio, "\" target=\"_blank\">").concat(portfolio, "</a>")
            : "Not provided", "</p>\n    ");
        resumeContent.innerHTML = resumeHTML;
        resumeOutput.style.display = "block";
        editResumeBtn.style.display = "inline-block";
    }
    function editResume() {
        resumeOutput.style.display = "none";
        resumeForm.style.display = "block";
    }
    generateResumeBtn.addEventListener("click", generateResume);
    editResumeBtn.addEventListener("click", editResume);
});
