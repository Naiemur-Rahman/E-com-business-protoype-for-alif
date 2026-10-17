const bagButton = document.querySelector('#bagButton');
const bagPanel = document.querySelector('#bagPanel');
const closeBag = document.querySelector('#closeBag');
const overlay = document.querySelector('#overlay');
const bagCount = document.querySelector('#bagCount');
const bagItems = document.querySelector('#bagItems');
let cart = [];

function toggleBag(open) { bagPanel.classList.toggle('open', open); overlay.classList.toggle('show', open); }
bagButton.addEventListener('click', () => toggleBag(true));
closeBag.addEventListener('click', () => toggleBag(false));
overlay.addEventListener('click', () => toggleBag(false));

document.querySelectorAll('.quick-add').forEach(button => button.addEventListener('click', () => {
  cart.push(button.dataset.product);
  bagCount.textContent = cart.length;
  bagItems.innerHTML = cart.map((item, index) => `<div class="bag-item"><span>${item}</span><small>৳ ${[650, 780, 320, 430][index % 4]}</small></div>`).join('');
  toggleBag(true);
}));

document.querySelectorAll('.heart').forEach(button => button.addEventListener('click', () => {
  button.classList.toggle('active');
  button.innerHTML = button.classList.contains('active') ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
}));

const productList = document.querySelector('#productList');
document.querySelector('#next').addEventListener('click', () => productList.scrollBy({ left: 290, behavior: 'smooth' }));
document.querySelector('#prev').addEventListener('click', () => productList.scrollBy({ left: -290, behavior: 'smooth' }));
