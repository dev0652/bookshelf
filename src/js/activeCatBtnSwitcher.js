import getRefs from './refs';

const { categoryListEl, allCategoriesBtn } = getRefs();

function activeCatBtnSwitch(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const activeBtn = e.target;
  const prevActiveBtn = document.querySelector('.active-category');

  if (prevActiveBtn && prevActiveBtn !== activeBtn) {
    prevActiveBtn.classList.remove('active-category');
  }

  activeBtn.classList.add('active-category');
}

categoryListEl.addEventListener('click', activeCatBtnSwitch);
console.log('categoryListEl: ', categoryListEl);
// allCategoriesBtn.addEventListener('click', activeCatBtnSwitch);
