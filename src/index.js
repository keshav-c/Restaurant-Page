import 'lightbox2/dist/css/lightbox.min.css';
import './css/main.css';
import switchTab from './js/dom';
import { setupTabs } from './js/tab';

setTimeout(setupTabs(), 1000);
const navTabs = document.querySelector('#tab-container');
navTabs.addEventListener('click', switchTab);
