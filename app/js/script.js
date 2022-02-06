console.log('HELLO');

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: true,
});

// Slogan
sr.reveal('.slogan__title', { origin: 'top' });
sr.reveal('.slogan__description', { origin: 'left' });

// Rating
sr.reveal('.rating__component', { origin: 'right', interval: 400 });

// Review
sr.reveal('.review__card', { origin: 'bottom', interval: 400, delay: 150 });
