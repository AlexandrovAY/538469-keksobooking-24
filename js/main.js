function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return 'Аргументы функции должны быть положительными';
  }
  if (max <= min) {
    const intermediate = min;
    min = max;
    max = intermediate;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloatFromInterval (min, max, fractionDigits) {
  if (min < 0 || max < 0) {
    return 'Аргументы функции должны быть положительными';
  }
  if (max <= min) {
    const intermediate = min;
    min = max;
    max = intermediate;
  }
  const fractionMultiplier = Math.pow(10, fractionDigits);
  return Math.floor((Math.random() * (max - min) + min) * fractionMultiplier) / fractionMultiplier;
}

getRandomIntInclusive(10, 10);
randomFloatFromInterval(10, 11, 1);
