require('./style.scss');

document.querySelectorAll('input').forEach((elem) => {
    elem.classList.add('input');
});

document.querySelectorAll('textarea').forEach((elem) => {
    elem.classList.add('textarea');
});

document.querySelector('.hero').setAttribute('style', `background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),url('/static/web/img/cover-contact.webp') center/cover;`)
