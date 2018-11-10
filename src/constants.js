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

// glassdoor - GD
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

// linkedin - LINKEDIN
const LINKEDIN_URL = 'https://www.linkedin.com/jobs/';
const LINKEDIN_JOB_SELECTOR = '#keyword-search-box';
const LINKEDIN_LOCATION_SELECTOR = '#location-search-box';
const LINKEDIN_SEARCH_SELECTOR = '.job-home-search-button';

// zip recruiter - ZIP
const ZIP_URL = 'https://www.ziprecruiter.com/';
const ZIP_JOB_SELECTOR = '#search1';
const ZIP_LOCATION_SELECTOR = '#location1';
const ZIP_SEARCH_SELECTOR = '.submit';

// monster - MTR
const MTR_URL = 'https://www.monster.com/';
const MTR_JOB_SELECTOR = '#q2';
const MTR_LOCATION_SELECTOR = '#where2';
const MTR_SEARCH_SELECTOR = '#doQuickSearch2';

// dice - DICE
const DICE_URL = 'https://www.dice.com/';
const DICE_JOB_SELECTOR = '#search-field-keyword';
const DICE_LOCATION_SELECTOR = '#search-field-location';
const DICE_SEARCH_SELECTOR = '#findTechJobs';

// stackoverflow - SOF
const SOF_URL = 'https://stackoverflow.com/jobs';
const SOF_JOB_SELECTOR = '#q';
const SOF_LOCATION_SELECTOR = '#l';
const SOF_SEARCH_SELECTOR = '#job-search-form > div.cols > div.-col._right.search-controls.d-inline > div';

const ALL_SITES = {
  glassdoor: {
    url: GD_URL,
    JOB_SELECTOR: GD_JOB_SELECTOR,
    LOCATION_SELECTOR: GD_LOCATION_SELECTOR,
    SEARCH_SELECTOR: GD_SEARCH_SELECTOR,
  },
  linkedin: {
    url: LINKEDIN_URL,
    JOB_SELECTOR: LINKEDIN_JOB_SELECTOR,
    LOCATION_SELECTOR: LINKEDIN_LOCATION_SELECTOR,
    SEARCH_SELECTOR: LINKEDIN_SEARCH_SELECTOR,
  },
  ziprecruiter: {
    url: ZIP_URL,
    JOB_SELECTOR: ZIP_JOB_SELECTOR,
    LOCATION_SELECTOR: ZIP_LOCATION_SELECTOR,
    SEARCH_SELECTOR: ZIP_SEARCH_SELECTOR,
  },
  monster: {
    url: MTR_URL,
    JOB_SELECTOR: MTR_JOB_SELECTOR,
    LOCATION_SELECTOR: MTR_LOCATION_SELECTOR,
    SEARCH_SELECTOR: MTR_SEARCH_SELECTOR,
  },
  dice: {
    url: DICE_URL,
    JOB_SELECTOR: DICE_JOB_SELECTOR,
    LOCATION_SELECTOR: DICE_LOCATION_SELECTOR,
    SEARCH_SELECTOR: DICE_SEARCH_SELECTOR,
  },
  stackoverflow: {
    url: SOF_URL,
    JOB_SELECTOR: SOF_JOB_SELECTOR,
    LOCATION_SELECTOR: SOF_LOCATION_SELECTOR,
    SEARCH_SELECTOR: SOF_SEARCH_SELECTOR,
  },
};

const SITES_NEED_CLEAR = {
  glassdoor: { needsClear: true },
  ziprecruiter: { needsClear: true },
  dice: { needsClear: true },
};

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
  ALL_SITES,
  SITES_NEED_CLEAR,
  ZIP_URL,
  ZIP_JOB_SELECTOR,
  ZIP_LOCATION_SELECTOR,
  ZIP_SEARCH_SELECTOR,
  MTR_URL,
  MTR_JOB_SELECTOR,
  MTR_LOCATION_SELECTOR,
  MTR_SEARCH_SELECTOR,
  DICE_URL,
  DICE_JOB_SELECTOR,
  DICE_LOCATION_SELECTOR,
  DICE_SEARCH_SELECTOR,
  SOF_URL,
  SOF_JOB_SELECTOR,
  SOF_LOCATION_SELECTOR,
  SOF_SEARCH_SELECTOR,
};
