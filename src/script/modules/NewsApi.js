export default class NewsApi {
  constructor(baseUrl, param) {
    this.baseUrl = baseUrl;
    this.from = param.from;
    this.to = param.to;
    this.apiKey = param.apiKey;
  }

  getNews(searchWord) {
    return fetch(`${this.baseUrl}q=${searchWord}&from=${this.from}&to=${this.to}&sortBy=publishedAt&language=ru&pageSize=100&apiKey=${this.apiKey}`,
    {
      method: 'GET',
      headers: {
        authorization: this.apiKey,
      }
    })
      .then(res => this.responce(res))
      .catch(err => {
        throw err;
      });
  }

  responce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
}
