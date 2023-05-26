const burgerMenu = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  burgerMenu.classList.toggle("active");
})


















// Код для слайдера новостей
let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('new-card')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25;
let maxMove = 100;

let desctop = window.matchMedia("(max-width: 1200px)");
if (desctop.matches) {
  movePer = 92;
  maxMove = 300;
}
let tablet = window.matchMedia("(max-width: 1150px)");
if (tablet.matches) {
  movePer = 103.5;
  maxMove = 400;
}
let mob_view = window.matchMedia("(max-width: 920px)");
if (mob_view.matches) {
  movePer = 107.5;
  maxMove = 800;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) { l = 0; }
  for (const i of product) {
    if (l > maxMove) { l = l - movePer; }
    i.style.left = '-' + l + '%';
  }

}
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) { l = 0; }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = '-' + l + '%';
    }
  }
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }
// Код для слайдера новостей










//Аккордеон
class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
        }
      }
      elHeader.parentElement.classList.toggle('accordion__item_show');
    });
  }
}

new ItcAccordion('#accordion-1');
new ItcAccordion('#accordion-2');
//Аккордеон











showTab("tab1-1");

function showTab(tabId) {
  // hide all tabs in current container, except the active one
  var container = document.getElementById(tabId).parentNode;
  Array.from(container.querySelectorAll('.tab')).forEach(function (tab) {
    tab.classList.remove('active-tab');
  });
  // show the selected tab
  document.getElementById(tabId).classList.add('active-tab');
  // set the active button in current container
  Array.from(container.querySelectorAll('.tab-btn')).forEach(function (btn) {
    btn.classList.remove('active-btn');
    if (btn.getAttribute('onclick') == "showTab('" + tabId + "')") {
      btn.classList.add('active-btn');
    }
  });
}








