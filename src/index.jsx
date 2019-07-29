import React from 'react';
import { render } from 'react-dom';

import store from './store/configureStore';
import Root from './components/Root';
import icon from './assets/favicon.ico';

render(<Root store={store} />, document.getElementById('root'));

(function setFavIcon() {
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = icon;
  document.getElementsByTagName('head')[0].appendChild(link);
})();
