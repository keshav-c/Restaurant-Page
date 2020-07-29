import about from './pages/about';
import contact from './pages/contact';

const tabs = {
  menu: 'Menu',
  about: 'About Us',
  contact: 'Contact Us',
};

const setupTabs = () => {
  const appContainer = document.getElementById('app-container');
  const title = document.createElement('h1');
  title.textContent = 'Bengaluru Tiffin';
  title.id = 'logo';
  appContainer.appendChild(title);
  const tabContainer = document.createElement('div');
  tabContainer.id = 'tab-container';
  appContainer.appendChild(tabContainer);
  // eslint-disable-next-line no-restricted-syntax
  for (const tabId in tabs) {
    if (Object.prototype.hasOwnProperty.call(tabs, tabId)) {
      const tabDiv = document.createElement('div');
      tabDiv.classList.add('tab-heading');
      tabDiv.id = tabId;
      tabDiv.textContent = tabs[tabId];
      tabContainer.appendChild(tabDiv);
    }
  }
  const tabContentDiv = document.createElement('div');
  tabContentDiv.id = 'tab-content';
  appContainer.appendChild(tabContentDiv);
};

const getTabContent = (tabName) => {
  let tabContent;
  switch (tabName) {
    case 'menu':
      tabContent = 'Render menu';
      break;
    case 'about':
      tabContent = about;
      break;
    case 'contact':
      tabContent = contact;
      break;
    default:
      tabContent = 'ERROR!! Tab name not valid';
  }
  return tabContent;
};

export { getTabContent, setupTabs };