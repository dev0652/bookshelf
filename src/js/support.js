import charities from './charities';

// console.log(charities);

const list = document.querySelector('.support-list');
// const item ='<li class="support-item"> ссылка на фонд <a class="support-link" href=""></a></li>';

// console.log(item);

// list.innerHTML += item;

const html = charities.map(makeMarkup).join('');

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');
  const path1 = img.normal;
  const path2 = img.retina;

  return `<li class="support-item">
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

console.log(str);
