import { pluralize } from './utils/pluralize.js';

const cardTemplate = document.querySelector('#card').content;
const popupCardTemplate = cardTemplate.querySelector('.popup');

const apartmentTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const getFeatures = (featuresContainer, currentFeatures) => {
  currentFeatures.forEach((featureItem) => {
    const li = document.createElement('li');
    li.classList.add('popup__feature', `popup__feature--${featureItem}`);
    featuresContainer.appendChild(li);
  });
};

const getPhotos = (container, photos, photoNode) => {
  photos.forEach((element) => {
    const img = photoNode.cloneNode(true);
    img.src = element;
    container.appendChild(img);
  });
};

const createCard = ({offer, author}) => {
  const cloneCard = popupCardTemplate.cloneNode(true);
  const featuresContainer = cloneCard.querySelector('.popup__features');
  const photosContainer = cloneCard.querySelector('.popup__photos');
  const photoNode = cloneCard.querySelector('.popup__photo');

  cloneCard.querySelector('.popup__title').textContent = offer.title;
  cloneCard.querySelector('.popup__text--address').textContent = offer.address;
  cloneCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cloneCard.querySelector('.popup__type').textContent = apartmentTypes[offer.type];
  cloneCard.querySelector('.popup__text--capacity').textContent =`${pluralize(offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${pluralize(offer.guests, ['гостя', 'гостей', 'гостей'])}`;
  cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cloneCard.querySelector('.popup__description').textContent = offer.description;
  cloneCard.querySelector('.popup__title').textContent = offer.title;
  cloneCard.querySelector('.popup__avatar').src = author.avatar;

  if(offer.photos.length > 0) {
    photosContainer.innerHTML = '';
    getPhotos(photosContainer, offer.photos, photoNode);
  } else {
    photosContainer.remove();
  }

  if(offer.features.length > 0) {
    featuresContainer.innerHTML = '';
    getFeatures(featuresContainer, offer.features);
  } else {
    featuresContainer.remove();
  }

  return cloneCard;
};

export { createCard };
