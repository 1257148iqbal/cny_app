/* eslint-disable no-console */
export const capitalizeFLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
};

export const isValidEmail = value => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value);
};

export const idGenerator = () => {
  return Math.floor(Math.random() * 100000);
};

export const linkify = inputText => {
  var replacedText, replacePattern1, replacePattern2, replacePattern3;

  //URLs starting with http://, https://, or ftp://
  replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\\/%?=~_|!:,.;]*[-A-Z0-9+&@#\\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

  //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  replacePattern2 = /(^|[^\\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

  //Change email addresses to mailto:: links.
  // eslint-disable-next-line no-useless-escape
  replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z0-9\\-]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

  return replacedText;
};

export const geValidUrl = (url, ubSecureUrl = false) => {
  if (!url.match(/^[a-zA-Z]+:\/\//)) {
    if (ubSecureUrl) {
      return 'http://' + url;
    }
    return 'https://' + url;
  }

  return url;
};

export const twoDecimal = number => {
  return number.toFixed(2);
};

export const stringifyConsole = (data, type: 'normal' | 'stringify') => {
  if (process.env.NODE_ENV === 'development') {
    if (type === 'normal') {
      console.log(data);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const getSign = signname => {
  switch (signname) {
    case 'cmph':
      return 'm\u00b3/h';
    case 'cubicmeter':
      return 'm\u00b3';
    case 'celsius':
      return `${'\u00b0'}${'\u0043'}`;
    case 'ncmph':
      return `${'Nm\u00b3/h'}`;
    case 'ncm':
      return `${'Nm\u00b3'}`;
    case 'bar':
      return `${'BAR'}`;
    case 'mbar':
      return `${'mbar'}`;
    case 'bar.g':
      return `${'Bar'}.g`;
    case 'centistokes':
      return `${'cSt'}`;
    case 'percentage':
      return `${'\u0025'}`;
    case 'kgph':
      return `${'kg/h'}`;
    case 'kg':
      return `${'KG'}`;
    case 'psig':
      return `${'Psig'}`;
    case 'mmwc':
      return `${'mmW.C.'}`;
    case 'lph':
      return `${'LIT/H'}`;
    case 'psi':
      return `${'psi'}`;
    case 'bsw':
      return `${'%BSW'}`;
    case 'xylene':
      return `${'%XYLENE'}`;
    case 'mt':
      return `${'MT'}`;
    case 'm':
      return `${'M'}`;
    default:
      return 'no-sign-mapped';
  }
};

export const fillDropDown = (data = [], label, value) => {
  return data.map(item => ({ ...item, label: item[label], value: item[value] }));
};

export const inNaNCheck = data => (isNaN(data) ? 0 : data);

export const isZeroCheck = data => (data === 0 ? '-' : data);

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getPercentage = (num, total) =>
  num === 0 && total === 0 ? 0 : Number(parseFloat((num * 100) / total).toFixed(2));

export const floatingPointCheck = (num, place = 2) => {
  return Number.isInteger(num) ? num : Number(parseFloat(num).toFixed(place));
};

/**
 * 26-Dec-2021(Nasir): add bsw and xylene
 **/
