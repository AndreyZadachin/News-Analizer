export default class NewsCardList {
  constructor(elem) {
    this.elem = elem;
  }

  renderNewsCardList(newsContainer) {
    this.elem.append(newsContainer);
  }
}
