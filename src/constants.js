const DEFAULT_VIEWPORT = { width: 1440, height: 877 };

// glassdoor stuff
const GD_URL = 'https://www.glassdoor.com';
const GD_QUESTIONS = [
  {
    type: 'input',
    name: 'job',
    message: 'Enter job ...'
  },
  {
    type: 'input',
    name: 'location',
    message: 'Enter location ...'
  },
  {
    type: 'input',
    name: 'lastUpdated',
    message: 'Enter last updated date ...'
  }
];

module.exports = {
  DEFAULT_VIEWPORT,
  GD_QUESTIONS,
  GD_URL
};