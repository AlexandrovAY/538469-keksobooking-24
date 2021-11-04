import {createArray} from './data.js';
import {createCard} from './card.js';

const map = document.querySelector('#map-canvas');

const listOfAds = createArray();
const card = createCard(listOfAds[0]);

map.appendChild(card);
