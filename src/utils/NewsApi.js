import { baseNewsUrl, apiKey, today, weekAgo } from './Constants';

class NewsApi {
  constructor(baseNewsUrl, apiKey) {
    this._baseNewsUrl = baseNewsUrl;
    this._apiKey = apiKey;
    this._today = today;
    this._weekAgo = weekAgo;
  }
  search(searchString) {
    return fetch(
      `${
        this._baseNewsUrl
      }q=${searchString}&from=${this._weekAgo.toISOString()}&to=${this._today.toISOString()}&sortBy=popularity&pageSize=100&apiKey=${
        this._apiKey
      }`,
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
