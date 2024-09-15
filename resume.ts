document.addEventListener("DOMContentLoaded", () => {
  const resumeOutput = document.getElementById("resume-output") as HTMLElement;
  const resumeContent = document.getElementById(
    "resume-content"
  ) as HTMLElement;
  const editResumeBtn = document.getElementById(
    "edit-resume-btn"
  ) as HTMLButtonElement;
  const generateResumeBtn = document.getElementById(
    "generate-resume-btn"
  ) as HTMLButtonElement;
  const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;

  if (
    !resumeOutput ||
    !resumeContent ||
    !editResumeBtn ||
    !generateResumeBtn ||
    !resumeForm
  ) {
    console.error("One or more elements are missing from the DOM.");
    return;
  }

  function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement)
      .value;
    const skills = (document.getElementById("skills") as HTMLInputElement)
      .value;
    const experience = (
      document.getElementById("experience") as HTMLInputElement
    ).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement)
      .value;

    const resumeHTML = `
      <p><strong>Name:</strong> ${name || "Not provided"}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>About:</strong> ${about || "Not provided"}</p>
      <p><strong>Skills:</strong> ${skills || "Not provided"}</p>
      <p><strong>Experience:</strong> ${experience || "Not provided"}</p>
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
    resumeForm.style.display = "block";
  }

  generateResumeBtn.addEventListener("click", generateResume);

  editResumeBtn.addEventListener("click", editResume);
});
