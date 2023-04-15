const sidebarLinks = document.querySelectorAll('.sidebar button');

sidebarLinks.forEach(link => {
  link.addEventListener('click', insertHeader);
});

function insertHeader(event) {
  event.preventDefault();

  const headerText = this.textContent;
  const headerElement = document.querySelector('.content h2');

  headerElement.textContent = headerText;

  const words = headerText.split(' ');
  const lastWord = words[words.length - 1];
  const span = document.createElement('span');
  span.textContent = lastWord;
  span.classList.add('last-word');
  headerElement.innerHTML = words.slice(0, -1).join(' ') + ' ';
  headerElement.appendChild(span);
}
