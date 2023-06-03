import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
// import jsonData from '../public/data/DATA.json';
import App from './views/app';
import swRegister from './utils/sw-register';

// MENU NAVBAR
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main-content'),
});

// HASH CHANGE
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // SW REGISTER
  swRegister();
});
