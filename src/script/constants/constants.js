//Переменные для index.js
export const SIX_DAYS_IN_MILLISECOND = 6 * 24 * 60 * 60 * 1000;
export const searchWord = document.querySelector('.search__input');
export const elemContainerForNews = document.querySelector('.news-card');
export const searchButton = document.querySelector('.search__button');
export const fieldForm = document.querySelector('.search__field');

//Переменные для about.js
export const FIRST_COMMIT = 0;
export const LAST_COMMIT = 20;
export const urlGithub = 'https://api.github.com/repos/AndreyZadachin/DiplomFront/commits';

//Переменные для analitics.js
export const REQUEST_ELEM = document.querySelector('.request__title-span');
export const NEWS_IN_WEEK = document.querySelector('.request__text-span');
export const REQUEST_IN_TITLE = document.querySelector('.request__text-span_title');
export const requestDate = document.querySelectorAll('.analitic__table-date');
export const days = ["ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ",];
export const DAYS_LITTLE = [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
