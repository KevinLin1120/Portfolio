// Change name when hover
let Name = document.getElementById('name');
Name.onmouseover = () => {
    Name.innerHTML = "林俊廷";

};
Name.onmouseleave = () => {
    Name.innerHTML = "Kevin";
};

// Skills 
let collapseBtns = document.getElementsByClassName('btn-check');
for (let i = 0; i < collapseBtns.length; i++) {
    // When click on the btn
    collapseBtns[i].addEventListener('click', () => {
        // Turn off other collapse
        let collapses = document.getElementsByClassName('collapse-horizontal');
        for (let j = 0; j < collapses.length; j++) {
            if (i != j) {
                collapses[j].classList.remove('show');
            }
        };
    });
}

// Selected works 
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true, // Ensures the central slide is always centered
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0, // No rotation for the slides
        stretch: 0, // No stretching of the slides
        depth: 150, // Depth perspective effect
        modifier: 1, // Multiplies the depth and scale effects
        slideShadows: false, // Disables slide shadows for cleaner look
    },
    autoplay: {
        delay: 3000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});