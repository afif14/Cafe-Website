const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(
        `.col-1, .hero-image, .card, .menu, .contact-box, .footer-container,.service-container, .footer`,{
        interval: 200 
    }
)
