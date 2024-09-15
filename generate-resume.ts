// Define types for form fields
const resumeOutput = document.getElementById("resume-output") as HTMLElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;
const editResumeBtn = document.getElementById(
  "edit-resume-btn"
) as HTMLButtonElement;

// Function to generate resume content
function generateResume() {
  const name = prompt("Enter your full name:");
  const email = prompt("Enter your email:");
  const about = prompt("Tell us about yourself:");
  const skills = prompt("Enter your skills (comma-separated):");
  const portfolio = prompt("Enter your portfolio link (optional):");

  // Generate HTML content for the resume
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




