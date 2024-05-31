const closeBtn = document.querySelector('.closeBtn');
const openBtn = document.querySelector('.openBtn');
let mobNav = document.querySelector('.mobNav');

closeBtn.addEventListener('click', () => {
    mobNav.classList.remove('openMobNav');
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
});

openBtn.addEventListener('click', () => {
    mobNav.classList.add('openMobNav');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

mobNav.addEventListener('click', () => {
    mobNav.classList.remove('openMobNav');
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
});
