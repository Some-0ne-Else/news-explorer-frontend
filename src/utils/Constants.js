//const baseUrl = 'http://localhost:3000';
//const baseNewsUrl = 'https://newsapi.org/v2/everything?';
const baseUrl = 'https://api.some0neelse.tk';
const baseNewsUrl = 'https://nomoreparties.co/news/v2/everything?';
const apiKey = '469f082828dc4b53b782d7b9193e9cb9';
const utcRuOffset = 3 * 60 * 60 * 1000; // 3h * 60m * 60s * 1000ms
const sevenDaysBefore = 7 * 24 * 60 * 60 * 1000; // 7d * 24h * 60m * 60s *1000ms
const today = new Date(Date.now() + utcRuOffset);
const weekAgo = new Date(Date.now() - sevenDaysBefore + utcRuOffset);
const token = '';
const cardsPerStep = 3;
export { baseUrl, baseNewsUrl, apiKey, today, weekAgo, token, cardsPerStep };
