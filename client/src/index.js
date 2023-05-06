// ** React Imports
// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss';
// ** PrismJS
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism-tomorrow.css';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
// ** Redux Imports
import { Provider } from 'react-redux';
// ** Service Worker
import { Router } from 'react-router-dom';
// ** Toast & ThemeColors Context
import { ToastContainer } from 'react-toastify';
// ** Core styles
import './@core/assets/fonts/feather/iconfont.css';
// ** Ripple Button
import './@core/components/ripple-button';
// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner';
import './@core/scss/core.scss';
// import './@fake-db';
import './assets/scss/style.scss';
import history from './history';
// if ( store?.auth?.getState()?.authenticateUser ) {
// };
// store.dispatch( getAuthUser() );
import { store } from './redux/storeConfig/store';
import * as serviceWorker from './serviceWorker';
import { ThemeContext } from './utility/context/ThemeColors';

// ** Lazy load app
const LazyApp = lazy( () => import( './App' ) );

// window.localStorage.removeItem( cookieName );
// window.onbeforeunload = function () {
//   localStorage.removeItem( cookieName );
//   return '';
// };
ReactDOM.render(

  <Router history={history} >
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <ThemeContext>
          <LazyApp />
          <ToastContainer newestOnTop />
        </ThemeContext>
      </Suspense>
    </Provider>
  </Router>,

  document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
