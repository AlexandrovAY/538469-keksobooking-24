const ARGUMENT_PASSING_ERROR = 'Неверно переданны аргументы при вызове функции';

const getRandomInt = (lower, upper) => {
  if (lower >= upper || lower < 0) {
    throw new Error (ARGUMENT_PASSING_ERROR);
  }

  const min = Math.ceil(lower);
  const max = Math.floor(upper);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, fractionDigits) => {
  if(min >= max || min < 0) {
    throw new Error (ARGUMENT_PASSING_ERROR);
  }

  return Number((Math.random() * (max - min) + min).toFixed(fractionDigits));
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

export { getRandomInt, getRandomFloat, getRandomArrayElement };
