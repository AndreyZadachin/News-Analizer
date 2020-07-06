import {formattingDate} from '../utils/formattingDate';

export default class CommitCard {
  constructor() {
  }

  createCardCommit(cardCommit) {
    const carouselCell = document.createElement('a');
    carouselCell.classList.add('carousel__cell', 'link');

    const carouselDate = document.createElement('time');
    carouselDate.classList.add('carousel__date');

    const carouselInfo = document.createElement('div');
    carouselInfo.classList.add('carousel__info');

    const carouselAvatar = document.createElement('img');
    carouselAvatar.classList.add('carousel__avatar');

    const carouselAbout = document.createElement('div');
    carouselAbout.classList.add('carousel__about');

    const carouselName = document.createElement('p');
    carouselName.classList.add('carousel__name');

    const carouselEmail = document.createElement('p');
    carouselEmail.classList.add('carousel__email');

    const carouselCommit = document.createElement('p');
    carouselCommit.classList.add('carousel__commit');

    carouselCell.setAttribute('href', cardCommit.commit.url);
    carouselCell.appendChild(carouselDate);
    carouselDate.textContent = formattingDate(cardCommit.commit.committer.date);
    carouselCell.appendChild(carouselInfo);
    carouselInfo.appendChild(carouselAvatar);
    carouselAvatar.setAttribute('src', cardCommit.author.avatar_url);
    carouselInfo.appendChild(carouselAbout);
    carouselAbout.appendChild(carouselName);
    carouselName.textContent = cardCommit.commit.committer.name;
    carouselAbout.appendChild(carouselEmail);
    carouselEmail.textContent = cardCommit.commit.committer.email;
    carouselCell.appendChild(carouselCommit);
    carouselCommit.textContent = cardCommit.commit.message;

    return carouselCell;
  }
}
