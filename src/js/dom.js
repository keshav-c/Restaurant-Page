import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

const getTabContent = (tabName) => {
  let tabContent;
  switch (tabName) {
    case 'menu':
      tabContent = menu;
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

const writeTabContents = (htmlContent) => {
  const activeTabContents = document.getElementById('tab-content');
  activeTabContents.innerHTML = htmlContent;
};

const clearTabs = () => {
  const tabs = [...document.getElementsByClassName('tab-heading')];
  tabs.forEach(tab => {
    if (tab.classList.contains('active-tab')) {
      tab.classList.remove('active-tab');
    }
  });
  writeTabContents('');
};

const activateTab = (tab) => {
  tab.classList.toggle('active-tab');
  writeTabContents(getTabContent(tab.id));
};

const switchTab = (event) => {
  clearTabs();
  const tabButton = event.target.closest('div');
  activateTab(tabButton);
};

export { switchTab, activateTab };
