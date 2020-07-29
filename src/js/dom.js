import getTabContent from './tab';

const activeTabContents = document.querySelector('#tab-content');

const clearTabs = () => {
  const tabs = [...document.getElementsByClassName('tab-heading')];
  tabs.forEach(tab => {
    tab.style.border = 'none';
    activeTabContents.innerHTML = '';
  });
};

const switchTab = (event) => {
  clearTabs();
  const tabButton = event.target.closest('div');
  tabButton.style.borderBottom = '2px solid red';
  activeTabContents.innerHTML = getTabContent(tabButton.id);
};

export default switchTab;
