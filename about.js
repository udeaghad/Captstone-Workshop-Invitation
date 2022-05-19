const navBar = document.querySelector('.nav-bar');
const menuBar = document.querySelector('.menu-bar');
const navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  menuBar.classList.toggle('change');
});

navList.addEventListener('click', () => {
  navBar.click();
});
