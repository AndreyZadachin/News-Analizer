import './pages/index.css';
import FormValidate from './script/components/FormValidate';
import NewsApi from './script/modules/NewsApi';
import NewsCard from './script/components/NewsCard';
import NewsCardList from './script/components/NewsCardList';
import DataStorage from './script/modules/DataStorage';

import { SIX_DAYS_IN_MILLISECOND, searchWord, elemContainerForNews, searchButton, fieldForm } from './script/constants/constants';

const dataStorage = new DataStorage();
const formValidate = new FormValidate(fieldForm, searchButton);
const TODAY = new Date();
const from = new Date(TODAY.getTime() - SIX_DAYS_IN_MILLISECOND).toISOString();
const TODAY_DATE = TODAY.toISOString();
//Массив для карточек
let cardElementArray = [];
//Счетчик для карточек
let counter = 0;
//Три карточки при каждом нажатии кнопки Показать еще
const maxCount = 3;
//Параметры для запроса новостей
const baseUrl = NODE_ENV === 'development' ? 'https://newsapi.org/v2/everything?' : 'https://nomoreparties.co/news/v2/everything?';
const param = {
  apiKey: '617c7f67d08945daaf71575e7e9a3488',
  from: from,
  to: TODAY_DATE,
};
const newsApi = new NewsApi(baseUrl, param);
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(elemContainerForNews);

//Очищаем инпут перед посещением страницы
searchWord.value = '';

//Функция отрисовки новостей и получения новостей из API, также прячет/показывает необходимые элементы навигации
function searchNews() {
  document.querySelector('.news').setAttribute('style', `display:none`);
  document.querySelector('.news__button').setAttribute('style', `display:none`);
  document.querySelector('.not-found').setAttribute('style', `display:none`);
  document.querySelector('.preloader').setAttribute('style', `display:flex`);

  localStorage.clear();
  event.preventDefault();

  newsApi
    .getNews(searchWord.value)
    .then((res) => {
      dataStorage.saveInLocalStorage(res);
      dataStorage.saveSearchWord(searchWord.value);
      cardElementArray.push(res);
      while (document.querySelector('.news-card').firstChild) {
        document.querySelector('.news-card').removeChild(document.querySelector('.news-card').firstChild);
      }
      if (res.articles.length > 3) {
        res.articles.splice(0, 3).forEach((newsContainer) => {
          newsCardList.renderNewsCardList(newsCard.createCardNews(newsContainer));
          document.querySelector('.news').setAttribute('style', `display:block`);
          document.querySelector('.news__button').setAttribute('style', `display:block`);
          document.querySelector('.preloader').setAttribute('style', `display:none`);
        });
      } else if (res.articles.length === 3) {
        res.articles.forEach((newsContainer) => {
          newsCardList.renderNewsCardList(newsCard.createCardNews(newsContainer));
          document.querySelector('.news').setAttribute('style', `display:block`);
          document.querySelector('.news__button').setAttribute('style', `display:none`);
          document.querySelector('.preloader').setAttribute('style', `display:none`);
        });
      } else {
        document.querySelector('.preloader').setAttribute('style', `display:none`);
        document.querySelector('.not-found').setAttribute('style', `display:flex`);
        document.querySelector('.news').setAttribute('style', `display:none`);
        document.querySelector('.news__button').setAttribute('style', `display:none`);
      }
    })
    .catch((err) => {
      alert(err + ' Запрос не выполнен.');
    });
}

//Функция для отрисовки карточек по кнопке Показать еще
function showMore() {
  let total = counter + maxCount;

  if (total >= cardElementArray[0].articles.length) {
    total = cardElementArray[0].articles.length;
    document.querySelector('.news__button').setAttribute('style', `display:none`);
  }

  const sliceRenderArray = cardElementArray[0].articles.slice(counter, total);

  for (let i = 0; i < 3; i++) {
    newsCardList.renderNewsCardList(newsCard.createCardNews(sliceRenderArray[i]));
    counter = total;
  }
  return counter;
}

//Слушатели на кнопки Искать и Показать еще
fieldForm.addEventListener('submit', searchNews);
document.querySelector('.news__button').addEventListener('click', showMore);
