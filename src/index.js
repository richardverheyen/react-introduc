//React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { getUserLocation } from './reducer/currentUser/actions';
import { setCurrentUser } from './reducer/currentUser/actions';
import { setUserId } from './reducer/currentUser/actions';


//Extra
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

// TODO: what's the best way to do this?
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
store.dispatch(setCurrentUser(currentUser.attributes));
store.dispatch(setUserId(currentUser.id));
if (currentUser.id) { //if there's a currentUser, update their location and call in nearby profiles
  store.dispatch(getUserLocation(currentUser.id));
}


// Create app
const container = document.querySelector('#root');

// Render app
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
      , container
    );
  });
}

registerServiceWorker();
