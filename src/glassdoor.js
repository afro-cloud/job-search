const initializeBrowser = require('./browser');
const clearInput = require('./pageUtils');
const {
  DEFAULT_VIEWPORT,
  GD_URL,
  GD_DAY_MAP,
  GD_DISTANCE_MAP,
} = require('./constants');
const { logAndExit } = require('./utils');

const processHomePage = async (inp) => {
  const {
    job, location, page,
  } = inp;
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

const handleGlassdoor = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job, location, lastUpdated, distance, minSalary,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(GD_URL);

  await processHomePage({ page, job, location });

  await page.waitForNavigation();

  try {
    await page.goto(
      `${page.url()}&fromAge=${GD_DAY_MAP[lastUpdated]}&radius=${
        GD_DISTANCE_MAP[distance]
      }&minSalary=${minSalary}`,
    );
  } catch (e) {
    logAndExit('Whoops something went wrong. Please try again.');
  }
};

module.exports = handleGlassdoor;
