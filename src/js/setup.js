import { activateTab } from './dom';

const tabs = [
  {
    tabId: 'menu',
    tabHeading: 'Menu',
  },
  {
    tabId: 'about',
    tabHeading: 'About Us',
  },
  {
    tabId: 'contact',
    tabHeading: 'Contact Us',
  },
];

const setupTabs = () => {
  const appContainer = document.getElementById('app-container');
  const title = document.createElement('h1');
  title.textContent = 'Bengaluru Tiffin';
  title.id = 'logo';
  appContainer.appendChild(title);
  const tabContainer = document.createElement('div');
  tabContainer.id = 'tab-container';
  appContainer.appendChild(tabContainer);
  tabs.forEach(({tabId, tabHeading}) => {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab-heading');
    tabDiv.id = tabId;
    tabDiv.textContent = tabHeading;
    tabContainer.appendChild(tabDiv);
  });
  const tabContentDiv = document.createElement('div');
  tabContentDiv.id = 'tab-content';
  appContainer.appendChild(tabContentDiv);
  const menuTab = document.getElementById('menu');
  activateTab(menuTab);
};

export default setupTabs;
