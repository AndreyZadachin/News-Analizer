import './pages/about.css';
import Flickity from 'flickity';
import GithubApi from './script/modules/GithubApi';
import CommitCard from './script/components/CommitCard';
import CommitCardList from './script/components/CommitCardList';

const slider = new Flickity( '.carousel', {
    cellAlign: 'center',
    wrapAround: true,
    groupCells: '90%',
 });

const urlGithub = 'https://api.github.com/repos/AndreyZadachin/DiplomFront/commits'
const githubApi = new GithubApi (urlGithub);

const commitCardList = new CommitCardList(slider);
const commitCard = new CommitCard();

githubApi.getCommits()
.then((res) => {
  res.forEach(carouselCell => commitCardList.renderCommitCard(commitCard.createCardCommit(carouselCell)))
})
.catch((err) => {
  alert(err + ' Запрос не выполнен.');
})
