const initializeBrowser = require('../browser');
const { createPage, processHomePage } = require('../pageUtils');
const { ALL_SITES, SITES_NEED_CLEAR } = require('../constants');
const { logError } = require('../utils');

const handleAllSites = async (answers) => {
  const browser = await initializeBrowser();
  const {
    job,
    location,
  } = answers;
  const sites = Object.keys(ALL_SITES);
  const [first, ...otherSites] = sites;
  const page = await createPage({ browser, url: ALL_SITES[`${first}`].url });

  try {
    await processHomePage({
      page,
      job,
      location,
      jobSelector: ALL_SITES[`${first}`].JOB_SELECTOR,
      locationSelector: ALL_SITES[`${first}`].LOCATION_SELECTOR,
      needsClear: SITES_NEED_CLEAR[first] || false,
    });
  } catch (e) {
    logError(`Something went wrong while processing ${first}. Please try again.`);
  }

  await page.click(ALL_SITES[`${first}`].SEARCH_SELECTOR);

  otherSites.forEach(async (site) => {
    const {
      url,
      JOB_SELECTOR,
      LOCATION_SELECTOR,
      SEARCH_SELECTOR,
    } = ALL_SITES[`${site}`];
    const next = await createPage({ browser, url });

    try {
      await processHomePage({
        page: next,
        job,
        location,
        jobSelector: JOB_SELECTOR,
        locationSelector: LOCATION_SELECTOR,
        needsClear: SITES_NEED_CLEAR[first] || false,
      });
      await next.click(SEARCH_SELECTOR);
    } catch (e) {
      logError(`Something went wrong while processing ${site}. Please try again.\nMessage: ${e.message}`);
    }
  });
};

module.exports = handleAllSites;
