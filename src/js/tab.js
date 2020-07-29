const getTabContent = (tabName) => {
  let tabContent;
  switch (tabName) {
    case 'menu':
      tabContent = 'Render menu';
      break;
    case 'about':
      tabContent = 'Render about';
      break;
    case 'contact':
      tabContent = 'Render contact';
      break;
    default:
      tabContent = 'ERROR!! Tab name not valid';
  }
  return tabContent;
};

export default getTabContent;