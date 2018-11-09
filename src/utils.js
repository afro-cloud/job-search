const colors = require('colors');

const colorRed = txt => colors.red(txt);
const colorGreen = txt => colors.green(txt);

// eslint-disable-next-line no-console
const logError = msg => console.log(colorRed(msg));

const logAndExit = (msg) => {
  logError(msg);
  process.exit();
};

const wrapWithCatch = (action, message) => {
  try {
    action();
  } catch (e) {
    logAndExit(message);
  }
};

const exitIfNotPresent = (item, collection) => {
  if (!collection[item]) {
    logError(`${item} is not a valid input. Please try again.`);
    process.exit();
  }
};

const isValidSalary = (salary) => {
  const n = Math.floor(Number(salary));
  return n !== Infinity && String(n) === salary && n >= 0;
};

module.exports = {
  colorRed,
  colorGreen,
  logError,
  wrapWithCatch,
  exitIfNotPresent,
  isValidSalary,
};
