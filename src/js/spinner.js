import Notiflix from 'notiflix';

export const spiner = {
  options: {
    svgSize: '90px',
    svgColor: 'rgba(0, 255, 27, 1)',
    messageFontSize: '16px',
    messageColor: 'rgba(0, 255, 27, 1)',
  },

  start() {
    return Notiflix.Loading.hourglass('Searching books...', this.options);
  },

  stop() {
    Notiflix.Loading.remove();
  },
};
