
const sectionContainer = document.querySelectorAll(".homeSection");
console.log(sectionContainer)

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("APPEAR");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,
});

sectionContainer.forEach((box) => {
    observer.observe(box);
});