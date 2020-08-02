import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min';
import './css/main.css';
import { switchTab } from './js/dom';
import setupTabs from './js/setup';

setupTabs();
const navTabs = document.querySelector('#tab-container');
navTabs.addEventListener('click', switchTab);
