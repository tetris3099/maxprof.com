const menuBut = document.querySelector('.mobile-menu');
const blackBox = document.querySelector('.black-box');
const closed = document.querySelector('.close-menu');

function openMenu () {
  blackBox.classList.toggle('is-open');
  document.body.classList.toggle('open')
}

menuBut.addEventListener('click', openMenu);
closed.addEventListener('click', openMenu);



