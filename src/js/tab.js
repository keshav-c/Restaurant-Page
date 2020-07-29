import about from './pages/about';
import contact from './pages/contact';

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

export default getTabContent;