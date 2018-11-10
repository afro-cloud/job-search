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

  Object.keys(ALL_SITES).forEach(async (site) => {
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
        needsClear: SITES_NEED_CLEAR[site] || false,
      });
      await next.click(SEARCH_SELECTOR);
    } catch (e) {
      logError(`Something went wrong while processing ${site}. Please try again.\nMessage: ${e.message}`);
    }
  });
};

module.exports = handleAllSites;
