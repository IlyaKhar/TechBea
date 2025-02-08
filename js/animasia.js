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

// Анимации для Новосте об образовании 

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach((element) => {
            const boxTop = element.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Запуск при загрузке страницы
});