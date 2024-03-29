import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import calcReducer from './reducers';

let store = createStore(calcReducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

