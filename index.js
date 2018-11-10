#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const handleGlassdoor = require('./src/sites/glassdoor');
const handleLinkedin = require('./src/sites/linkedin');
const handleStackoverflow = require('./src/sites/stackoverflow');
const handleDice = require('./src/sites/dice');
const handleMonster = require('./src/sites/monster');
const handleZiprecruiter = require('./src/sites/ziprecruiter');
const handleAllSites = require('./src/sites/allSites');
const { GD_QUESTIONS, DEFAULT_QUESTIONS } = require('./src/constants');
const { colorGreen } = require('./src/utils');

const sitesSupportedMap = {
  glassdoor: {
    handler: handleGlassdoor,
    questions: GD_QUESTIONS,
  },
  linkedin: {
    handler: handleLinkedin,
    questions: DEFAULT_QUESTIONS,
  },
  stackoverflow: {
    handler: handleStackoverflow,
    questions: DEFAULT_QUESTIONS,
  },
  dice: {
    handler: handleDice,
    questions: DEFAULT_QUESTIONS,
  },
  monster: {
    handler: handleMonster,
    questions: DEFAULT_QUESTIONS,
  },
  ziprecruiter: {
    handler: handleZiprecruiter,
    questions: DEFAULT_QUESTIONS,
  },
};

const cli = () => {
  program
    .version('0.0.1')
    .option('-g, --glassdoor', 'Search for jobs with Glassdoor')
    .option('-l, --linkedin', 'Search for jobs with LinkedIn')
    .option('-s, --stackoverflow', 'Search for jobs with Stackoverflow')
    .option('-d, --dice', 'Search for jobs with Dice')
    .option('-z, --ziprecruiter', 'Search for jobs with ZipRecruiter')
    .option('-m, --monster', 'Search for jobs with Monster')
    .option('-a, --all', 'Search for jobs on all sites registered')
    .description(
      'CLI for searching jobs. Open a new search in the browser with ease.',
    );

  if (!process.argv.slice(2).length) {
    program.outputHelp(colorGreen);
    process.exit();
  }

  Object.keys(sitesSupportedMap).forEach((site) => {
    const { handler, questions } = sitesSupportedMap[site];
    program
      .command(site)
      .alias(site.charAt(0))
      .description(`Search ${site} jobs`)
      .action(() => {
        prompt(questions).then(answers => handler(answers));
      });
  });

  program
    .command('all')
    .alias('a')
    .description('Search for all the jobs')
    .action(() => {
      prompt(DEFAULT_QUESTIONS).then(answers => handleAllSites(answers));
    });

  program.parse(process.argv);
};

cli();
