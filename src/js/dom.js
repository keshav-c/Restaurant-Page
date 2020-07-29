import { getTabContent } from './tab';

const writeTabContents = (htmlContent) => {
  const activeTabContents = document.getElementById('tab-content');
  activeTabContents.innerHTML = htmlContent;
};

const clearTabs = () => {
  writeTabContents('');
  const tabs = [...document.getElementsByClassName('tab-heading')];
  tabs.forEach(tab => {
    tab.style.border = 'none';
  });
};


const switchTab = (event) => {
  clearTabs();
  const tabButton = event.target.closest('div');
  tabButton.style.borderBottom = '2px solid red';
  writeTabContents(getTabContent(tabButton.id));
};

export default switchTab;
