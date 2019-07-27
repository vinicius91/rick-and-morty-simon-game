import React from 'react';
import { render } from 'react-dom';

import store from './store/configureStore';
import Root from './components/Root';

render(<Root store={store} />, document.getElementById('root'));
