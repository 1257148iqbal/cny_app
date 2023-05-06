// ** Redux, Thunk & Root Reducer Imports
import { applyMiddleware, compose, createStore } from 'redux';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// ** init middleware
const middleware = [thunk, createDebounce()];

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ** Create store
const store = createStore( rootReducer, {}, composeEnhancers( applyMiddleware( ...middleware ) ) );

export { store };
