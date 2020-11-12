const baseNewsUrl = 'http://newsapi.org/v2/everything?';
const apiKey = '469f082828dc4b53b782d7b9193e9cb9';

// let url = baseNewsUrl +
// 'q=Apple&' +
// 'from=2020-11-11&' +
// 'sortBy=popularity&' +
// 'apiKey=469f082828dc4b53b782d7b9193e9cb9';

// let req = new Request(url);
// fetch(req)
// .then((res) => res.json() )
// .then((res) => console.log(res))

class NewsApi {
  constructor(baseNewsUrl, apiKey) {
    this._baseNewsUrl = baseNewsUrl;
    this._apiKey = apiKey;
  }
  search(searchString) {
    return fetch(
      `${this._baseNewsUrl}q=${searchString}&from=2020-11-11&sortBy=popularity&pageSize=100&apiKey=${this._apiKey}`,
      {
        method: 'GET',
      },
    )
      .then((result) => result.json())
      .catch((err) => {
        console.log(err);
      });
  }
}

const newsApi = new NewsApi(baseNewsUrl, apiKey);

export default newsApi;
