const puppeteer = require('puppeteer');
const clearInput = require('./clearInput.js');
const { DEFAULT_VIEWPORT, GD_URL } = require('./constants');

const queryParams = {
  minSalary: 'minSalary=',
  fromAge: 'fromAge=',
  radius: 'radius='
};

const processHomePage = async inp => {
  const { job, location, page } = inp;
  const searchInput = await page.$('#KeywordSearch');
  const locationInput = await page.$('#LocationSearch');

  await searchInput.click();
  await searchInput.focus();
  await searchInput.type(job);

  await locationInput.click();
  await locationInput.focus();

  await clearInput(locationInput);
  await locationInput.type(location);

  await page.click('#HeroSearchButton');
};

const handleGlassdoor = async answers => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-fullscreen']
  });
  const { job, location, lastUpdated } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(GD_URL);

  await processHomePage({ page, job, location });

  await page.waitForNavigation();
  await page.goto(`${page.url()}&fromAge=${lastUpdated}`);
};

module.exports = handleGlassdoor;
