const { isValidSalary } = require('../utils');

describe('utils tests', () => {
  it('correctly identifies an invalid salary', () => {
    expect(isValidSalary(-100)).toBeFalsy();
  });
});
