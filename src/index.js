import image from './apple-touch-icon.png';

const img = document.createElement('img');
img.src = image;

document.querySelector('#content').appendChild(img);

// import { initializeCounter } from './counter';

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
