const initializeBrowser = require('./browser');
const { processHomePage } = require('./pageUtils');
const {
  DEFAULT_VIEWPORT,
  LINKEDIN_URL,
  GENERIC_ERROR_MESSAGE,
  LINKEDIN_JOB_SELECTOR,
  LINKEDIN_LOCATION_SELECTOR,
  LINKEDIN_SEARCH_SELECTOR,
} = require('./constants');
const { logAndExit } = require('./utils');

const handleLinkedin = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(LINKEDIN_URL);

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: LINKEDIN_JOB_SELECTOR,
      locationSelector: LINKEDIN_LOCATION_SELECTOR,
    });
  } catch (e) {
    logAndExit(GENERIC_ERROR_MESSAGE);
  }

  await page.click(LINKEDIN_SEARCH_SELECTOR);
};

module.exports = handleLinkedin;
