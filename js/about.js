document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cta-button");

    button.addEventListener("click", () => {
        alert("Добро пожаловать в TeachBear! Начните обучение прямо сейчас.");
    });

    window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#e66f1a";
        } else {
            header.style.background = "#ff7f27";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".cta-button");

    button.addEventListener("click", () => {
        alert("Добро пожаловать в TeachBear! Начните обучение прямо сейчас.");
    });

    window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#e66f1a";
        } else {
            header.style.background = "#ff7f27";
        }
    });

    // Анимация появления блоков
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        observer.observe(section);
    });
});