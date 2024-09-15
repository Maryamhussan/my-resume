const resumeOutput = document.getElementById("resume-output") as HTMLElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;
const editResumeBtn = document.getElementById(
  "edit-resume-btn"
) as HTMLButtonElement;

function generateResume() {
  const name = prompt("Enter your full name:");
  const email = prompt("Enter your email:");
  const about = prompt("Tell us about yourself:");
  const skills = prompt("Enter your skills (comma-separated):");
  const portfolio = prompt("Enter your portfolio link (optional):");

  const resumeHTML = `
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>About:</strong> ${about || "Not provided"}</p>
        <p><strong>Skills:</strong> ${skills || "Not provided"}</p>
        <p><strong>Portfolio:</strong> ${
          portfolio
            ? `<a href="${portfolio}" target="_blank">${portfolio}</a>`
            : "Not provided"
        }</p>
    `;

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
