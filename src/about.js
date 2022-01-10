import './pages/about.css';
import Flickity from 'flickity';
import GithubApi from './script/modules/GithubApi';
import CommitCard from './script/components/CommitCard';
import CommitCardList from './script/components/CommitCardList';

import { FIRST_COMMIT, LAST_COMMIT, urlGithub } from './script/constants/constants';

//Инициализация слайдера
const slider = new Flickity('.carousel', {
  cellAlign: 'center',
  wrapAround: true,
  groupCells: '90%',
});

//Создание и отрисовка карточек с ГитХаб
const githubApi = new GithubApi(urlGithub);
const commitCardList = new CommitCardList(slider);
const commitCard = new CommitCard();

//ГитХаб API по получению коммитов
githubApi
  .getCommits()
  .then((res) => {
    res
      .slice(FIRST_COMMIT, LAST_COMMIT)
      .forEach((carouselCell) => commitCardList.renderCommitCard(commitCard.createCardCommit(carouselCell)));
  })
  .catch((err) => {
    alert(err + ' Запрос не выполнен.');
  });
