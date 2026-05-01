const sections = document.querySelectorAll(".content-section");

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = "none";
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = "block";
    }
}

const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const educationBtn = document.getElementById("educationBtn");
const experienceBtn = document.getElementById("experienceBtn");
const projectsBtn = document.getElementById("projectsBtn");

if (aboutBtn) {
    aboutBtn.addEventListener("click", () => showSection("about"));
}

if (skillsBtn) {
    skillsBtn.addEventListener("click", () => showSection("skills"));
}

if (educationBtn) {
    educationBtn.addEventListener("click", () => showSection("education"));
}

if (experienceBtn) {
    experienceBtn.addEventListener("click", () => showSection("experience"));
}

if (projectsBtn) {
    projectsBtn.addEventListener("click", () => showSection("projects"));
}

if (document.getElementById("about")) {
    showSection("about");
}
