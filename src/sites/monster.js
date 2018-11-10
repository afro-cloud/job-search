const initializeBrowser = require('../browser');
const { processHomePage } = require('../pageUtils');
const {
  DEFAULT_VIEWPORT,
  MTR_URL,
  GENERIC_ERROR_MESSAGE,
  MTR_JOB_SELECTOR,
  MTR_LOCATION_SELECTOR,
  MTR_SEARCH_SELECTOR,
} = require('../constants');
const { logAndExit } = require('../utils');

const handleMonster = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(MTR_URL);

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: MTR_JOB_SELECTOR,
      locationSelector: MTR_LOCATION_SELECTOR,
    });
  } catch (e) {
    logAndExit(GENERIC_ERROR_MESSAGE);
  }

  await page.click(MTR_SEARCH_SELECTOR);
};

module.exports = handleMonster;
