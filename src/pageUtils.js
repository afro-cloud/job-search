const clearInput = async (input) => {
  await input.click({ clickCount: 3 });
  await input.press('Backspace');
};

module.exports = clearInput;
