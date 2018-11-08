const colors = require('colors');

const colorRed = txt => colors.red(txt);
const colorGreen = txt => colors.green(txt);

module.exports = {
  colorRed,
  colorGreen,
};
