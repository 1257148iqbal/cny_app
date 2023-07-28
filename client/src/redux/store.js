// // ** Redux Imports
// import rootReducer from './rootReducer'
// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware => {
//     return getDefaultMiddleware({
//       serializableCheck: false
//     })
//   }
// })

// export { store }

// ** Redux, Thunk & Root Reducer Imports
import { applyMiddleware, compose, createStore } from 'redux'
import createDebounce from 'redux-debounced'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

// ** init middleware
const middleware = [thunk, createDebounce()]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ** Create store
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)))

export { store }

