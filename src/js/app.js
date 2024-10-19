document.getElementById('themeToggle').addEventListener('click', function () {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
});

let slideIndex = 1;
const slideChangeTime = 5000;
const transitionDuration = 2000;
showSlides(slideIndex);

setInterval(() => {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-container")[0].children;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

