// Example script file - script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
    });
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 200); // Stagger animation for each section
    });
});
