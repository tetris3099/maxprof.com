const cardBox = document.querySelector('.price-repair');

const a = [

  document.getElementById('card-one').addEventListener('click', function name() {
    cardBox.scrollTo(0, 0)}),

  document.getElementById('card-two').addEventListener('click', function name() {
    cardBox.scrollTo(320, 0)}),

    document.getElementById('card-three').addEventListener('click', function name() {
      cardBox.scrollTo(620, 0)}),

      document.getElementById('card-four').addEventListener('click', function name() {
        cardBox.scrollTo(860, 0)})
];

// CARDS
function iconShow() {
  const cardBoxScrolled = Number(cardBox.scrollLeft.toFixed(0));
  const cardBoxWidth = cardBox.scrollWidth - cardBox.clientWidth;
  const res = Number(((cardBoxScrolled / cardBoxWidth) * 100).toFixed(0));
  console.log(res);

  if(res > 85 && res === 100) {
    document.getElementById('card-four').classList.add('check');
    document.getElementById('card-three').classList.remove('check');
    document.getElementById('card-two').classList.remove('check');
    document.getElementById('card-one').classList.remove('check');
  } else  if(res > 50 && res < 85) {
  document.getElementById('card-three').classList.add('check');
  document.getElementById('card-one').classList.remove('check');
  document.getElementById('card-two').classList.remove('check');
  document.getElementById('card-four').classList.remove('check');
} else if(res > 12 && res < 49) {
  document.getElementById('card-two').classList.add('check');
  document.getElementById('card-four').classList.remove('check');
  document.getElementById('card-three').classList.remove('check');
  document.getElementById('card-one').classList.remove('check');
} else if(res === 0 && res < 12) {
  document.getElementById('card-one').classList.add('check');
  document.getElementById('card-two').classList.remove('check');
  document.getElementById('card-three').classList.remove('check');
  document.getElementById('card-four').classList.remove('check');
}};

cardBox.addEventListener('scroll', iconShow)

// TO TOP
const b = document.querySelector('.to-top').addEventListener('click', function name() {
  window.scrollTo(0, 0)
});

function nameToTop() {
  const a = document.body.scrollTop || document.documentElement.scrollTop;
  const b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const c = (a / b * 100).toFixed(0);
  const res = Number(c)

  if(res > 30) {
    document.querySelector('.to-top').classList.remove('no')
  } else if(res < 30 || res === 0) {
    document.querySelector('.to-top').classList.add('no')
  }
}

window.addEventListener('scroll', nameToTop);

