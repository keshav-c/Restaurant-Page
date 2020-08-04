import menuImage1 from './assets/item1.jpeg';
import menuImage1Thumb from './assets/item1_thumb.jpeg';
import menuImage2 from './assets/item2.jpg';
import menuImage2Thumb from './assets/item2_thumb.jpg';
import menuImage3 from './assets/item3.jpeg';
import menuImage3Thumb from './assets/item3_thumb.jpeg';
import menuImage4 from './assets/item4.jpg';
import menuImage4Thumb from './assets/item4_thumb.jpg';

const images = [
  {
    image: menuImage1,
    thumb: menuImage1Thumb,
    caption: 'Bisi Bele Bath! It\'s very hot!!',
    alt: 'Bisi Bele Bath',
    id: 'menu-item-1',
  },
  {
    image: menuImage2,
    thumb: menuImage2Thumb,
    caption: 'Delicious Vadai! Crunchy outside, Soft inside.',
    alt: 'Vada',
    id: 'menu-item-2',
  },
  {
    image: menuImage3,
    thumb: menuImage3Thumb,
    caption: 'Wholesome Upma! So Tasy, so healthy!',
    alt: 'Umpa',
    id: 'menu-item-3',
  },
  {
    image: menuImage4,
    thumb: menuImage4Thumb,
    caption: 'Grand Ghee Roast. Simply The best!',
    alt: 'Dosa',
    id: 'menu-item-4',
  },
];

const menuContent = document.createElement('div');
menuContent.id = 'gallery';

images.forEach(({
  image,
  thumb,
  caption,
  alt,
  id,
}) => {
  const imgLink = document.createElement('a');
  imgLink.href = image;
  imgLink.setAttribute('data-lightbox', id);
  imgLink.setAttribute('data-title', caption);
  imgLink.setAttribute('data-alt', alt);
  const imgThumb = document.createElement('img');
  imgThumb.src = thumb;
  imgLink.appendChild(imgThumb);
  menuContent.appendChild(imgLink);
});

export default menuContent.outerHTML;
