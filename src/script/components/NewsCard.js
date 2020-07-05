import {formattingDate} from '../utils/formattingDate';

export default class NewsCard {
  constructor() {
  }

  createCardNews(cardNews) {
    const newsContainer = document.createElement('a');
    newsContainer.classList.add('news-card__container', 'link');

    const newsImage = document.createElement('img');
    newsImage.classList.add('news-card__image');

    const newsInfo = document.createElement('div');
    newsInfo.classList.add('news-card__info');

    const newsDate = document.createElement('time');
    newsDate.classList.add('news-card__date');

    const newsTitle = document.createElement('h3');
    newsTitle.classList.add('news-card__title');

    const newsParagraph = document.createElement('p');
    newsParagraph.classList.add('news-card__paragraph');

    const newsAuthor = document.createElement('p');
    newsAuthor.classList.add('news-card__author');

    newsContainer.setAttribute('href', cardNews.url);
    newsContainer.setAttribute ('target','_blank');
    newsContainer.appendChild(newsImage);

    if (cardNews.urlToImage === null) {
      cardNews.urlToImage = 'http://ecoaltera.ru/local/templates/altera/img/no_image.png';
    }

    newsImage.setAttribute('src', cardNews.urlToImage);
    newsImage.setAttribute('alt', 'Здесь должна быть картинка новости');
    newsContainer.appendChild(newsInfo);
    newsInfo.appendChild(newsDate);
    newsDate.textContent = formattingDate(cardNews.publishedAt);
    newsInfo.appendChild(newsTitle);
    newsTitle.textContent = cardNews.title;
    newsInfo.appendChild(newsParagraph);
    newsParagraph.textContent = cardNews.description;
    newsInfo.appendChild(newsAuthor);
    newsAuthor.textContent = cardNews.source.name;

    return newsContainer;
  }
}
