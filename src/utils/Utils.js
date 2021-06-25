/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import noImage from '../images/no-image.png';

function changeDateFormat(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];
  const year = date.getFullYear();
  return `${day} ${monthName} ${year}`;
}

function fixAbsentData(searchArray) {
  searchArray.forEach((item) => {
    if (item.urlToImage === null) {
      item.urlToImage = noImage;
    }
  });
}

function countWords(arr) {
  const resultArr = [];
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    let acc = 0;
    if (resultArr.find((el) => el.keyword === arr[i].keyword)) {
      // eslint-disable-next-line no-continue
      continue;
    } // if keyword already checked, then skiping it
    for (let j = 0; j < arr.length; j++) {
      if (arr[i].keyword === arr[j].keyword) acc++;
      if (j === arr.length - 1) {
        index += 1;
      }
    }
    resultArr[index] = { keyword: arr[i].keyword, counter: acc };
  }
  resultArr.sort((a, b) => b.counter - a.counter);
  return resultArr;
}

function declOfNum(n, textForms) {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
}

export { changeDateFormat, fixAbsentData, countWords, declOfNum };
