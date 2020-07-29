import './css/main.css';
import switchTab from './js/dom';

const navTabs = document.querySelector('#tab-container');
navTabs.addEventListener('click', switchTab);
