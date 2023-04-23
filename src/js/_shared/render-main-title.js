import getRefs from '../refs';
const { mainTitle } = getRefs();

// Colorize the last word in a category title
export function renderMainTitle(id) {
  //
  const allWordsButLast = id.split(' ').slice(0, -1).join(' ');

  const words = id.split(' ');
  const lastWord = words[words.length - 1];

  mainTitle.innerHTML = `${allWordsButLast} <span class="content-part-title--last-word-static">${lastWord}</span>`;
}
