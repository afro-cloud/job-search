const puppeteer = require('puppeteer');
const clearInput = require('./src/clearInput.js');
const VIEWPORT = { width: 1440, height: 877 };

const queryParams = {
  minSalary: 'minSalary=',
  fromAge: 'fromAge=',
  radius: 'radius='
};

const restrictions = {
  minSalary: ['numericValidation'],
  fromAge: ['ageValidation'],
  radius: ['numericValidation']
};

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-fullscreen']
  });
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.goto('https://www.glassdoor.com');

  await processHomePage(page);

  await page.waitForNavigation();
  await page.goto(`${page.url()}&fromAge=1`);
};

const processHomePage = async page => {
  const searchInput = await page.$('#KeywordSearch');
  const locationInput = await page.$('#LocationSearch');

  // Show search form.
  await searchInput.click();
  await searchInput.focus();
  await searchInput.type('Software Engineer');

  await locationInput.click();
  await locationInput.focus();

  await clearInput(locationInput);
  await locationInput.type('Santa Monica, CA');

  await page.click('#HeroSearchButton');
};

main();
