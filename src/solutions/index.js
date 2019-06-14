require('./style.scss');

if (window.innerWidth < 768) {
    document.querySelectorAll('.button.is-pulled-right').forEach((elem) => {
        elem.classList.remove('is-pulled-right');
    })
}

document.querySelector('.hero').setAttribute('style', `background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),url('/static/web/img/cover-solutions.webp') center/cover;`)


document.getElementById('webdev-img').setAttribute('src', '/static/web/img/webdev.webp');
document.getElementById('sysdev-img').setAttribute('src', '/static/web/img/sysdev.webp');
document.getElementById('digm-img').setAttribute('src', '/static/web/img/digim.webp');
document.getElementById('mobile-img').setAttribute('src', '/static/web/img/mobile.jpeg');
document.getElementById('consult-img').setAttribute('src', '/static/web/img/consult.webp');
