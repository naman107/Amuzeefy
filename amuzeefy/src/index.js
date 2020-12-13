import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import watcherSaga from './redux/Sagas/watcherSaga';
import rootReducer from './redux/Reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watcherSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

