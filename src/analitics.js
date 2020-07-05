import './pages/analitics.css';
import DataStorage from './script/modules/DataStorage';

import {REQUEST_ELEM, NEWS_IN_WEEK, REQUEST_IN_TITLE, requestDate, days, SIX_DAYS_IN_MILLISECOND, DAYS_LITTLE} from './script/constants/constants';

const dataStorage = new DataStorage();
const arr = dataStorage.getArr();
const newDateNow = new Date();
const MONTH = days[newDateNow.getMonth()];
const MONTH_IN_TABLE = document.querySelector('.analitic__date-span');

REQUEST_ELEM.textContent = dataStorage.getSearchWord();
NEWS_IN_WEEK.textContent = arr.totalResults;
MONTH_IN_TABLE.textContent = localStorage.getItem('month');

localStorage.setItem(`month`, `${MONTH}`);

//Подсчет общего количества упоминания статей в заголовках
function requestsTitle() {
  let titleResults = 0;
  arr.articles.forEach(item => {
      if (item.title.toLowerCase().includes(REQUEST_ELEM.textContent.toLowerCase())) {
        titleResults++;
      }
  });
  REQUEST_IN_TITLE.textContent = titleResults;
};

//Отрисовка графика по количеству новостей в процентах от общего числа
function newsInDay() {
  let newsResultsPerDay = {};
  arr.articles.forEach(item => {
    const dateNews = new Date(item.publishedAt.substring(0, 10)).getDate();
    if (dateNews in newsResultsPerDay) {
      newsResultsPerDay[dateNews]++;
    } else {
      newsResultsPerDay[dateNews] = 1;
    }
});

const FIRST_DAY = new Date(new Date().getTime() - SIX_DAYS_IN_MILLISECOND);
  for (let i = 0; i <= 6; i++) {
    const daysInMillisecond = i * 24 * 60 * 60 * 1000;
    const date = new Date(FIRST_DAY.getTime() + daysInMillisecond);
    const day = date.getDate();
    const littleDays = DAYS_LITTLE[`${date.getDay()}`];
    document.querySelector(`.analitic__table-date${i}`).textContent = `${day}, ${littleDays}`;
    if (day in newsResultsPerDay) {
      const percent = newsResultsPerDay[`${day}`] * 100 / arr.totalResults;
      document.querySelector(`.analitic__table-score${i}`).setAttribute('style', `padding-right:${percent}%`);
      document.querySelector(`.analitic__table-score${i}`).textContent = `${newsResultsPerDay[`${day}`]}`;
    } else {
      document.querySelector(`.analitic__table-score${i}`).setAttribute('padding-right', '0%');
      document.querySelector(`.analitic__table-score${i}`).textContent = '0';
    }
  }
};


requestsTitle();
newsInDay();
