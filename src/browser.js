const puppeteer = require('puppeteer');

const initializeBrowser = async () => puppeteer.launch({
  headless: false,
  args: ['--start-fullscreen'],
});

module.exports = initializeBrowser;
