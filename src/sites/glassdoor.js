const initializeBrowser = require('../browser');
const { processHomePage } = require('../pageUtils');
const {
  DEFAULT_VIEWPORT,
  GD_URL,
  GD_DAY_MAP,
  GD_DISTANCE_MAP,
  GENERIC_ERROR_MESSAGE,
  GD_JOB_SELECTOR,
  GD_LOCATION_SELECTOR,
  GD_SEARCH_SELECTOR,
} = require('../constants');
const { logAndExit, wrapWithCatch } = require('../utils');

const handleGlassdoor = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
    lastUpdated,
    distance,
    minSalary,
  } = answers;
  const page = await browser.newPage();
  await page.setViewport(DEFAULT_VIEWPORT);
  await page.goto(GD_URL);

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: GD_JOB_SELECTOR,
      locationSelector: GD_LOCATION_SELECTOR,
      needsClear: true,
    });
  } catch (e) {
    logAndExit(GENERIC_ERROR_MESSAGE);
  }

  await page.click(GD_SEARCH_SELECTOR);

  await page.waitForNavigation();

  wrapWithCatch(
    () => page.goto(
      `${page.url()}&fromAge=${GD_DAY_MAP[lastUpdated]}&radius=${
        GD_DISTANCE_MAP[distance]
      }&minSalary=${minSalary}`,
    ),
    GENERIC_ERROR_MESSAGE,
  );
};

module.exports = handleGlassdoor;
