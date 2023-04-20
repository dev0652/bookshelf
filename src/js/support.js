import charities from './charities';
import Swiper from 'swiper';
import 'swiper/swiper.scss';

const list = document.querySelector('.support-list');

const html = charities.map(makeMarkup).join('');

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');

  return `
  <li class="swiper-slide">
        <div class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${url}" target="_blank">
            <img
                srcset="${img.normal} 1x, ${img.retina} 2x"
                src="${img.normal}" type="image/png" alt="${title}">
        </a>
    </li>`;
}

list.innerHTML = html;

const str = charities.map((element, index) => {
  return '<li class="support-item"> ссылка на фонд <a class="support-link" href=""></a></li>';
});

const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  slidesPerView: 4,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    480: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.swiper-next',
  },
});
// console.log(str);
