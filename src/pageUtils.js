const clearInput = async (input) => {
  await input.click({ clickCount: 3 });
  await input.press('Backspace');
};

const processHomePage = async ({
  jobSelector,
  locationSelector,
  job,
  location,
  page,
  needsClear = false,
}) => {
  const searchInput = await page.$(jobSelector);
  const locationInput = await page.$(locationSelector);

  await searchInput.click();
  await searchInput.focus();
  await searchInput.type(job);

  await locationInput.click();
  await locationInput.focus();

  if (needsClear) {
    await clearInput(locationInput);
  }

  await locationInput.type(location);
};

module.exports = {
  clearInput,
  processHomePage,
};
