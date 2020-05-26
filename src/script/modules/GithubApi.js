/*https://api.github.com/repos/yandex/localization-context-extension/commits
GET /repos/:owner/:repo/git/commits/:commit_sha
*/
export default class GithubApi {
  constructor(url) {
    this.url = url;
  }

  getCommits() {
    return fetch(`${this.url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
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
