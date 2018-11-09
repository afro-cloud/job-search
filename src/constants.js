const DEFAULT_VIEWPORT = { width: 1440, height: 877 };
const DEFAULT_JOB = 'Software Engineer';
const DEFAULT_LOCATION = 'Los Angeles, CA';
const GENERIC_ERROR_MESSAGE = 'Whoops something went wrong. Please try again.';

const DEFAULT_QUESTIONS = [
  {
    type: 'input',
    name: 'job',
    message: 'Enter job ...',
    default: 'Software Engineer',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Enter location ...',
    default: 'Los Angeles, CA',
  },
];

// glassdoor
const GD_URL = 'https://www.glassdoor.com';
const GD_QUESTIONS = [
  ...DEFAULT_QUESTIONS,
  {
    type: 'list',
    name: 'lastUpdated',
    message: 'Enter last updated date ...',
    choices: ['Last Day', 'Last Week', 'Last Two Weeks', 'Last Month'],
    default: 'Last Day',
  },
  {
    type: 'list',
    name: 'distance',
    message: 'Enter distance in miles from inputted location ...',
    choices: [
      '5 miles',
      '10 miles',
      '15 miles',
      '25 miles',
      '50 miles',
      '100 miles',
    ],
    default: '5 miles',
  },
  {
    type: 'input',
    name: 'minSalary',
    message: 'Enter minimum salary requirement ...',
    default: '0',
  },
];
const GD_DAY_MAP = {
  'Last Day': 1,
  'Last Week': 7,
  'Last Two Weeks': 14,
  'Last Month': 30,
};
const GD_DISTANCE_MAP = {
  '5 miles': 5,
  '10 miles': 10,
  '15 miles': 15,
  '25 miles': 25,
  '50 miles': 50,
  '100 miles': 100,
};
const GD_JOB_SELECTOR = '#KeywordSearch';
const GD_LOCATION_SELECTOR = '#LocationSearch';
const GD_SEARCH_SELECTOR = '#HeroSearchButton';

// linkedin
const LINKEDIN_URL = 'https://www.linkedin.com/jobs/';
const LINKEDIN_JOB_SELECTOR = '#keyword-search-box';
const LINKEDIN_LOCATION_SELECTOR = '#location-search-box';
const LINKEDIN_SEARCH_SELECTOR = '.job-home-search-button';

module.exports = {
  DEFAULT_VIEWPORT,
  DEFAULT_JOB,
  DEFAULT_LOCATION,
  DEFAULT_QUESTIONS,
  GENERIC_ERROR_MESSAGE,
  GD_QUESTIONS,
  GD_URL,
  GD_DAY_MAP,
  GD_DISTANCE_MAP,
  LINKEDIN_URL,
  LINKEDIN_JOB_SELECTOR,
  LINKEDIN_LOCATION_SELECTOR,
  LINKEDIN_SEARCH_SELECTOR,
  GD_JOB_SELECTOR,
  GD_LOCATION_SELECTOR,
  GD_SEARCH_SELECTOR,
};
