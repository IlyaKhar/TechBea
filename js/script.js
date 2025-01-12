// script.js


// Переключение выпадающего меню для мобильных устройств
document.querySelectorAll('.dropdown > a').forEach(menu => {
    menu.addEventListener('click', (event) => {
        event.preventDefault(); // Отключаем переход по ссылке
        const dropdownMenu = menu.nextElementSibling;
        const isOpen = dropdownMenu.style.display === 'block';

        // Закрыть все открытые меню
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });

        // Показать или скрыть текущее меню
        dropdownMenu.style.display = isOpen ? 'none' : 'block';
    });
});

// Закрытие модального окна при изменении размеров экрана
window.addEventListener('resize', () => {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');

    if (window.innerWidth > 768) {
        loginModal.classList.remove('show');
        registerModal.classList.remove('show');
    }
});





// Элементы для бургер-меню
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burgerMenu");
    const navMenu = document.getElementById("navMenu");

    // Переключение видимости меню
    burgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-hidden");
        navMenu.classList.toggle("mobile-visible");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burgerMenu");
    const navMenu = document.getElementById("navMenu");

    burgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-visible");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burgerMenu");
    const navMenu = document.getElementById("navMenu");

    burgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("mobile-visible");
    });

    // Закрытие меню при клике вне его области
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            navMenu.classList.remove("mobile-visible");
        }
    });
});

// Получаем элементы
const openLoginBtn = document.getElementById("openLogin");
const openRegisterBtn = document.getElementById("openRegister");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const closeButtons = document.querySelectorAll(".close-btn");

// Функция для открытия модального окна
function openModal(modal) {
    modal.classList.add("show");
}

// Функция для закрытия модального окна
function closeModal(modal) {
    modal.classList.remove("show");
}

// Открытие модальных окон
openLoginBtn.addEventListener("click", () => openModal(loginModal));
openRegisterBtn.addEventListener("click", () => openModal(registerModal));

// Закрытие модальных окон по кнопке
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        closeModal(loginModal);
        closeModal(registerModal);
    });
});

// Закрытие модального окна при клике на фон
window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        closeModal(loginModal);
    }
    if (event.target === registerModal) {
        closeModal(registerModal);
    }
});

// Закрытие модального окна по клавише Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal(loginModal);
        closeModal(registerModal);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Popup functionality
    const popup = document.getElementById("popup");
    const openPopup = () => popup.style.display = "flex";
    const closePopup = () => popup.style.display = "none";

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginButton = document.getElementById("login-btn");
    const registerButton = document.getElementById("register-btn");
    const loginSwitch = document.getElementById("login-switch");
    const registerSwitch = document.getElementById("register-switch");

    // Switch between login and register
    const showLoginForm = () => {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    };

    const showRegisterForm = () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    };

    loginSwitch.addEventListener("click", showLoginForm);
    registerSwitch.addEventListener("click", showRegisterForm);

    // Open and close popup
    loginButton.addEventListener("click", openPopup);
    registerButton.addEventListener("click", openPopup);
    document.getElementById("popup-close").addEventListener("click", closePopup);

    // Smooth scrolling animation
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector(".sticky-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Responsive menu toggle
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;";
    document.querySelector(".header-container").prepend(menuToggle);

    menuToggle.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("open");
    });

    // Close dropdown menus on outside click
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => menu.style.display = "none");
        }
    });

    // Save user data
    const saveUserData = (data) => {
        fetch("/save-user-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => console.log("Success:", data))
            .catch(error => console.error("Error:", error));
    };

    // Handle form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const userData = Object.fromEntries(formData.entries());
        console.log("Login Data:", userData);
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const userData = Object.fromEntries(formData.entries());
        console.log("Registration Data:", userData);
        saveUserData(userData);
    });
});


// Add responsiveness
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const forms = document.querySelectorAll(".form");

    forms.forEach(form => {
        if (width < 768) {
            form.style.width = "90%";
        } else {
            form.style.width = "300px";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Кнопки для открытия окон
    const openLoginButton = document.getElementById("openLogin");
    const openRegisterButton = document.getElementById("openRegister");

    // Модальные окна
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");

    // Кнопки закрытия окон
    const closeLoginButton = document.querySelector("#loginModal .close-btn");
    const closeRegisterButton = document.querySelector("#registerModal .close-btn");

    // Открытие окна входа
    openLoginButton.addEventListener("click", () => {
        loginModal.classList.remove("hidden");
    });

    // Открытие окна регистрации
    openRegisterButton.addEventListener("click", () => {
        registerModal.classList.remove("hidden");
    });

    // Закрытие окна входа
    closeLoginButton.addEventListener("click", () => {
        loginModal.classList.add("hidden");
    });

    document.addEventListener
    closeRegisterButton.addEventListener("click", () => {
        registerModal.classList.add("hidden");
    });
});

// Анимации для секций
// Общий код для анимаций секций
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});




// Анимация для бокового меню
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});

const toggleMenu = document.querySelector(".toggle-menu");
const sidebar = document.querySelector(".sidebar");

toggleMenu.addEventListener("click", () => {
sidebar.classList.toggle("expanded");
});

// Анимация для секции 1 (TechBear — №1 по популярности)
function initPopularitySection() {
    const counters = document.querySelectorAll('.popularity .counter');
    counters.forEach(counter => {
        let start = 0;
        const end = parseInt(counter.dataset.value, 10);
        const duration = 2000;
        const step = end / (duration / 10);

        const updateCounter = setInterval(() => {
            start += step;
            if (start >= end) {
                counter.textContent = end;
                clearInterval(updateCounter);
            } else {
                counter.textContent = Math.round(start);
            }
        }, 10);
    });
}

// Анимация для секции 2 (Преимущества обучения)
function initAdvantagesSection() {
    const icons = document.querySelectorAll('.advantages .icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.classList.add('active');
        });
        icon.addEventListener('mouseleave', () => {
            icon.classList.remove('active');
        });
    });
}

// Слайдер для секции 3 (Престижные документы)
function initCertificatesSlider() {
    const slider = document.querySelector('.certificates-slider');
    const slides = document.querySelectorAll('.certificates-slider .slide');
    const prevBtn = document.querySelector('.certificates-slider .prev');
    const nextBtn = document.querySelector('.certificates-slider .next');
    let currentSlide = 0;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        updateSlider();
    });

    updateSlider();
}

// Анимация чисел для секции 4 (Результаты обучающихся)
document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".progress-ring__circle");

    const animateProgress = () => {
        progressCircles.forEach((circle) => {
            const percent = parseFloat(circle.dataset.percent);
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;

            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = offset;
        });
    };

    // Анимация запускается при прокрутке до секции
    const section = document.querySelector(".results");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateProgress();
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(section);
});




// Слайдер для секции 5 (Отзывы слушателей)
function initReviewsSlider() {
    const slider = document.querySelector('.reviews-slider');
    const slides = slider.querySelectorAll('.review-card');
    const dots = slider.querySelector('.dots');
    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dots.appendChild(dot);
    });

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
        });

        dots.childNodes.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    updateSlider();
}

// Инициализация функций
initPopularitySection();
initAdvantagesSection();
initCertificatesSlider();
initResultsSection();
initReviewsSlider();

