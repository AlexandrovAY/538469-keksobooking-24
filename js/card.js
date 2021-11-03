const map = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
const popupCardTemplate = cardTemplate.querySelector('.popup');

const APARTMENTS = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const getFeatures = (featuresContainer, currentFeatures) => {
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');

  featuresList.forEach((featureListItem) => {
    const isNecessary = currentFeatures.some(
      (feature) => featureListItem.classList.contains(`popup__feature--${feature}`),
    );

    if (!isNecessary) {
      featureListItem.remove();
    }
  });
};

const getPhotos = (container, photos) => {
  const photosListFragment = document.createDocumentFragment();
  container.querySelector('img').remove();

  photos.forEach((element) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = element;
    img.width = '45';
    img.height = '40';
    img.alt = 'Фотография жилья';
    photosListFragment.append(img);
  });
  container.appendChild(photosListFragment);
};

const createCard = (item) => {
  for(let i = 0; i < item.length; i++) {
    const cloneCard = popupCardTemplate.cloneNode(true);
    cloneCard.querySelector('.popup__title').textContent = item[i].offer.title;
    cloneCard.querySelector('.popup__text--address').textContent = item[i].offer.address;
    cloneCard.querySelector('.popup__text--price').textContent = `${item[i].offer.price} ₽/ночь`;
    cloneCard.querySelector('.popup__type').textContent = APARTMENTS[item[i].offer.type];
    cloneCard.querySelector('.popup__text--capacity').textContent =`${item[i].offer.rooms} комнаты для ${item[i].offer.guests} гостей`;
    cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${item[i].offer.checkin}, выезд до ${item[i].offer.checkout}`;
    getFeatures(cloneCard.querySelector('.popup__features'), item[i].offer.features);
    cloneCard.querySelector('.popup__description').textContent = item[i].offer.description;
    getPhotos(cloneCard.querySelector('.popup__photos'), item[i].offer.photos);
    cloneCard.querySelector('.popup__title').textContent = item[i].offer.title;
    cloneCard.querySelector('.popup__avatar').src = item[i].author.avatar;
    map.appendChild(cloneCard);
  }
};

export { createCard };
