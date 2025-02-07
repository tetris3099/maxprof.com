const cardBox = document.querySelector('.price-repair');

const cardRadio = {
 radioOne: document.getElementById('card-radio-one'),
 radioTwo: document.getElementById('card-radio-two'),
 radioThree: document.getElementById('card-radio-three'),
 radioFour: document.getElementById('card-radio-four'),
};

const clickScrol = (element, x) => {
  element.addEventListener('click', function name() {
    cardBox.scrollTo(x, 0)})
};

clickScrol(cardRadio.radioOne, 0);
clickScrol(cardRadio.radioTwo, 320);
clickScrol(cardRadio.radioThree, 620);
clickScrol(cardRadio.radioFour, 1000);

// CARDS
const iconShow = () => {
  const cardBoxScrolled = Number(cardBox.scrollLeft.toFixed(0));
  const cardBoxWidth = cardBox.scrollWidth - cardBox.clientWidth;
  const res = Number(((cardBoxScrolled / cardBoxWidth) * 100).toFixed(0));

  const {radioOne, radioTwo, radioThree, radioFour} = cardRadio
  if(res > 85 && res < 100) {
    radioFour.classList.add('check');
    radioThree.classList.remove('check');
    radioTwo.classList.remove('check');
    radioOne.classList.remove('check');
  } else  if(res > 50 && res < 85) {
    radioThree.classList.add('check');
    radioOne.classList.remove('check');
    radioTwo.classList.remove('check');
    radioFour.classList.remove('check');
  } else if(res > 12 && res < 49) {
    radioTwo.classList.add('check');
    radioFour.classList.remove('check');
    radioThree.classList.remove('check');
    radioOne.classList.remove('check');
  } else if(res > 0 && res < 12) {
    radioOne.classList.add('check');
    radioTwo.classList.remove('check');
    radioThree.classList.remove('check');
    radioFour.classList.remove('check');
  }
};

cardBox.addEventListener('scroll', iconShow)

const butCards = {
  buttOne: document.getElementById('butt-card-one'),
  buttTwo: document.getElementById('butt-card-two'),
  buttThree: document.getElementById('butt-card-three'),
  buttFour: document.getElementById('butt-card-four'),
};

const clickButt = (click) => {
  click.addEventListener('click', whatButton)
  const {buttOne, buttTwo, buttThree, buttFour} = butCards;
  function whatButton () {
    if (click === buttOne) {
      buttOne.textContent = '90 999 грн';
    } else if (click === buttTwo) {
      buttTwo.textContent = '150 000 грн';
    } else if (click === buttThree) {
      buttThree.textContent = '185 000 грн';
    } else if (click === buttFour) {
      buttFour.textContent = '237 000 грн';
    }
  }
};

clickButt(butCards.buttOne);
clickButt(butCards.buttTwo);
clickButt(butCards.buttThree);
clickButt(butCards.buttFour);
