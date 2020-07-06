export default class DataStorage {
  constructor() {
  }

  saveInLocalStorage(arr) {
    localStorage.setItem('cardNews', JSON.stringify(arr));
  }

  saveSearchWord(word) {
    localStorage.setItem('searchWord', JSON.stringify(word));
  }

  getArr() {
    return JSON.parse(localStorage.getItem('cardNews'));
  }

  getSearchWord() {
    return JSON.parse(localStorage.getItem('searchWord'));
  }
}
