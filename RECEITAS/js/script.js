document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Obrigado por enviar sua receita! Ela será revisada e adicionada em breve.');
    this.reset();
});

document.querySelectorAll('.recipe-card a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active-link');
    }
});
