console.log('hello from index.js');

// import { initializeCounter } from './counter';

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
