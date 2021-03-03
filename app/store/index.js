import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import sagas from '../sagas';

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore() {
  const logger = createLogger();
  /// / eslint-disable-next-line no-underscore-dangle
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? composeWithDevTools
    : compose;
  const enhancer = composeEnhancers( // composeEnhancers
    applyMiddleware(sagaMiddleware), // add ", logger" after sagaMiddleware
  );
  const store = createStore(rootReducer, enhancer);

  // Start all of our sagas
  sagaMiddleware.run(sagas);

  return store;
}
