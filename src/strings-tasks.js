function getStringLength(value) {
  return typeof value === 'string' ? value.length : 0;
}

function isString(value) {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }
  return false;
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd(value);
}

function repeatString(str, times) {
  return times <= 0 ? '' : str.repeat(times);
}

function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  return index !== -1
    ? `${str.slice(0, index)}${str.slice(index + value.length)}`
    : str;
}

function removeLastOccurrences(str, value) {
  const pos = str.lastIndexOf(value);
  if (pos !== -1) {
    return str.slice(0, pos) + str.slice(pos + value.length);
  }
  return str;
}

function sumOfCodes(str) {
  let result = 0;
  if (str) {
    for (let i = 0; i < str.length; i += 1) {
      result += str.charCodeAt(i);
    }
  }
  return result;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const min = String(minutes).padStart(2, '0');
  const sec = String(seconds).padStart(2, '0');
  return `${min}:${sec}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  const vowelCount = str.match(/[aeiouy]/gi);
  return vowelCount === null ? 0 : vowelCount.length;
}

function isPalindrome(str) {
  const regex = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(regex, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

function findLongestWord(sentence) {
  const str = sentence.split(' ');
  const sortedArr = str.sort((a, b) => b.length - a.length);
  return sortedArr[0];
}

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

function invertCase(str) {
  return str
    .split('')
    .map((letter) => {
      if (letter.toUpperCase() === letter) {
        return letter.toLowerCase();
      }
      return letter.toUpperCase();
    })
    .join('');
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.slice(7, -1);
}

function unbracketTag(str) {
  return str.slice(1, -1);
}

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  return str.replace(/[A-Z]/gi, (c) => {
    const index = alphabet.indexOf(c);
    return rot13[index];
  });
}

function getCardId(value) {
  const cards = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];

  const index = cards.indexOf(value);

  return index;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
