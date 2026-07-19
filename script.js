// ==========================================
// DR CONGO HISTORY BOOK
// script.js
// ==========================================

// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ==========================================
// Navbar background on scroll
// ==========================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background = "#003366";
        navbar.style.transition = "0.4s";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

        document.querySelectorAll("nav a").forEach(link => {
            link.style.color = "white";
        });

        const logo = document.querySelector(".logo");
        if (logo) logo.style.color = "#FFD700";

    } else {

        navbar.style.background = "white";

        document.querySelectorAll("nav a").forEach(link => {
            link.style.color = "#333";
        });

        const logo = document.querySelector(".logo");
        if (logo) logo.style.color = "#0057b8";
    }

});


// ==========================================
// Fade In Sections
// ==========================================

const pages = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

pages.forEach(page => {

    page.style.opacity = "0";
    page.style.transform = "translateY(50px)";
    page.style.transition = "all .8s ease";

    observer.observe(page);

});


// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// Back To Top Button
// ==========================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0057B8";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==========================================
// Welcome Message
// ==========================================

window.addEventListener("load", () => {

    console.log("DR Congo History Book Loaded Successfully");

});