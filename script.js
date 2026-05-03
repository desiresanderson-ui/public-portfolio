const sections = document.querySelectorAll(".content-section");
const buttons = document.querySelectorAll("nav button");

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = "none";
        section.classList.remove("active");
    });

        buttons.forEach(button => {
        button.classList.remove("active");
    });

    const target = document.getElementById(sectionId);
    const activeButton = document.getElementById(sectionId + "Btn");

    if (target) {
        target.style.display = "block";

        setTimeout(() => {
            target.classList.add("active");
        }, 50);
    }

    if (activeButton) {
        activeButton.classList.add("active");
    }
}

const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const educationBtn = document.getElementById("educationBtn");
const experienceBtn = document.getElementById("experienceBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

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

if (contactBtn) {
    contactBtn.addEventListener("click", () => showSection("contact"));
}

if (document.getElementById("about")) {
    showSection("about");
}
