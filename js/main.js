const getRandomInt = (lower, upper) => {
  if (lower >= upper || lower < 0) {
    throw new Error ('Неверно переданны аргументы при вызове функции');
  }

  const min = Math.ceil(lower);
  const max = Math.floor(upper);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-unused-vars
const getRandomFloat = (min, max, fractionDigits) => {
  if (min >= max || min < 0) {
    throw ('Аргументы функции должны быть положительными');
  }

  return Number((Math.random() * (max - min) + min).toFixed(fractionDigits));
};

const randomAuthor = () => {
  const number = getRandomInt(1, 10);
  return {
    avatar: `img/avatars/user${number < 10 ? `0${  number}` : number}.png`,
  };
};

const getCoordinates = (min, max, digits) => {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const getCoordinatesLatitude = getCoordinates(35.65, 35.7, 5);
const getCoordinatesLongitude = getCoordinates(139.7, 139.8, 5);

const typeOfHousing = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const checkInTime = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photo = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getArrayOfStrings = (array) => array.reduce((acc, value) => {
  if (getRandomInt(0, 1)) {
    acc.push(value);
  }
  return acc;
},[]);

const randomOffer = () => ({
  title: 'Милая, уютная квартирка',
  address: `${getCoordinatesLatitude}, ${getCoordinatesLongitude}`,
  price: getRandomInt(100, 10000),
  type: typeOfHousing[getRandomInt(0, typeOfHousing.length - 1)],
  rooms: getRandomInt(1, 3),
  guests: getRandomInt(0, 3),
  checkin: checkInTime[getRandomInt(0, checkInTime.length - 1)],
  checkout: checkInTime[getRandomInt(0, checkInTime.length - 1)],
  features: getArrayOfStrings(features),
  description: 'Уютная квартирка на берегу моря',
  photos: getArrayOfStrings(photo),
});

const createObject = () => ({
  author: randomAuthor(),
  offer: randomOffer(),
  location: {
    lat: getCoordinatesLatitude,
    lng: getCoordinatesLongitude,
  },
});

const createArray = () => Array.from({length: 10}, createObject);

createArray();
