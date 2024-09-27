// Butonu seç
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Sayfa kaydırma olayını dinle
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Sayfanın belirli bir yüksekliğine geldiğinde butonu göster
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Butona tıklandığında yukarı kaydır
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
