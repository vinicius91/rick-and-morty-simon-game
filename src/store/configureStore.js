import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let store;

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25
      })) ||
    compose;

  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
