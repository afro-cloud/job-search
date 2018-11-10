const initializeBrowser = require('../browser');
const { processHomePage } = require('../pageUtils');
const {
  DEFAULT_VIEWPORT,
  ZIP_URL,
  GENERIC_ERROR_MESSAGE,
  ZIP_JOB_SELECTOR,
  ZIP_LOCATION_SELECTOR,
  ZIP_SEARCH_SELECTOR,
} = require('../constants');
const { logAndExit } = require('../utils');

const handleZiprecruiter = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(ZIP_URL);

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: ZIP_JOB_SELECTOR,
      locationSelector: ZIP_LOCATION_SELECTOR,
      needsClear: true,
    });
  } catch (e) {
    logAndExit(GENERIC_ERROR_MESSAGE);
  }

  await page.click(ZIP_SEARCH_SELECTOR);
};

module.exports = handleZiprecruiter;
