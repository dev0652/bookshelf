import charities from './charities';
import getRefs from './refs';

const { supportUkraineCnt } = getRefs();

function makeMarkup({ url, title, img }, index) {
  const digits = (index + 1).toString().padStart(2, '0');

  return `<li class="support-item">
        <span class="support-index">${digits}</span>
        <a class="support-link" href="${url}" target="_blank">
            <img class="support-image"
                srcset="${img.normal} 1x, ${img.retina} 2x"
                src="${img.normal}" type="image/png" alt="${title}">
        </a>
    </li>`;
}

supportUkraineCnt.innerHTML = charities.map(makeMarkup).join('');
