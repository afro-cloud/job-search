const initializeBrowser = require('../browser');
const { processHomePage } = require('../pageUtils');
const {
  DEFAULT_VIEWPORT,
  SOF_URL,
  GENERIC_ERROR_MESSAGE,
  SOF_JOB_SELECTOR,
  SOF_LOCATION_SELECTOR,
  SOF_SEARCH_SELECTOR,
} = require('../constants');
const { logAndExit } = require('../utils');

const handleStackoverflow = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(SOF_URL);

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: SOF_JOB_SELECTOR,
      locationSelector: SOF_LOCATION_SELECTOR,
    });
  } catch (e) {
    logAndExit(GENERIC_ERROR_MESSAGE);
  }

  await page.click(SOF_SEARCH_SELECTOR);
};

module.exports = handleStackoverflow;
