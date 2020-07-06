export default class CommitCardList {
  constructor(card) {
    this.card = card;
  }

  renderCommitCard(carouselCell) {
    this.card.append(carouselCell);
  }
}
