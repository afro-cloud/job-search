const initializeBrowser = require('../browser');
const { processHomePage } = require('../pageUtils');
const {
  DEFAULT_VIEWPORT,
  DICE_URL,
  GENERIC_ERROR_MESSAGE,
  DICE_JOB_SELECTOR,
  DICE_LOCATION_SELECTOR,
  DICE_SEARCH_SELECTOR,
} = require('../constants');
const { logAndExit } = require('../utils');

const handleDice = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(DICE_URL);

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: DICE_JOB_SELECTOR,
      locationSelector: DICE_LOCATION_SELECTOR,
      needsClear: true,
    });
  } catch (e) {
    logAndExit(GENERIC_ERROR_MESSAGE);
  }

  await page.click(DICE_SEARCH_SELECTOR);
};

module.exports = handleDice;
