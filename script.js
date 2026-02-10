// Typing Effect
const words = ["Competitive Programmer", "AI/ML Enthusiast", "Full Stack Developer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = words[i];
    document.getElementById("typing").textContent =
        isDeleting ? current.substring(0, j--) : current.substring(0, j++);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Mobile Menu
document.querySelector(".menu-btn").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("show");
};

// Image Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

// Auto slide
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").innerText =
        "Message sent successfully!";
});
