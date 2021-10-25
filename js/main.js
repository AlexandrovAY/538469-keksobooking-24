// imports

// const
const ARGUMENT_PASSING_ERROR = 'Неверно переданны аргументы при вызове функции';

const MIN_LATITUDE = 35.65;

const MAX_LATITUDE = 35.7;

const MIN_LONGITUDE = 139.7;

const MAX_LONGITUDE = 139.8;

const NUMBER_OF_OBJECTS = 10;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTO = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// selectors

// function
const getRandomInt = (lower, upper) => {
  if (lower >= upper || lower < 0) {
    throw new Error (ARGUMENT_PASSING_ERROR);
  }

  const min = Math.ceil(lower);
  const max = Math.floor(upper);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createRandomAuthor = (index) => ({
  avatar: `img/avatars/user${++index < 10 ? `0${  index}` : index}.png`,
});

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const getArrayOfStrings = (array) => array.reduce((acc, value) => {
  if (getRandomInt(0, 1)) {
    acc.push(value);
  }
  return acc;
},[]);

const getRandomFloat = (min, max, fractionDigits) => {
  if(min >= max || min < 0) {
    throw new Error (ARGUMENT_PASSING_ERROR);
  }

  return Number((Math.random() * (max - min) + min).toFixed(fractionDigits));
};

const createRandomOffer = (latitude, longitude) => ({
  title: 'Милая, уютная квартирка',
  address: `${latitude}, ${longitude}`,
  price: getRandomInt(100, 10000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInt(1, 10),
  guests: getRandomInt(0, 10),
  checkin: getRandomArrayElement(CHECK_IN_TIME),
  checkout: getRandomArrayElement(CHECK_IN_TIME),
  features: getArrayOfStrings(FEATURES),
  description: 'Уютная квартирка на берегу моря',
  photos: getArrayOfStrings(PHOTO),
});

const createObject = (index) => {
  const latitude = getRandomFloat(MIN_LATITUDE, MAX_LATITUDE, 5);
  const longitude = getRandomFloat(MIN_LONGITUDE, MAX_LONGITUDE, 5);

  return {
    author: createRandomAuthor(index),
    offer: createRandomOffer(latitude, longitude),
    location: {
      lat: latitude,
      lng: longitude,
    },
  };
};

const createArray = () => Array.from({length: NUMBER_OF_OBJECTS}, (_, index) => createObject(index));

// exec
createArray();
