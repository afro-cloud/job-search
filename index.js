#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const handleGlassdoor = require('./src/glassdoor');
const handleLinkedin = require('./src/linkedin');
const handleAllSites = require('./src/allSites');
const { GD_QUESTIONS, DEFAULT_QUESTIONS } = require('./src/constants');
const { colorGreen } = require('./src/utils');

const cli = () => {
  program
    .version('0.0.1')
    .option('-g, --glassdoor', 'Search for jobs with Glassdoor')
    .option('-l, --linkedin', 'Search for jobs with LinkedIn')
    .option('-a, --all', 'Search for jobs on all sites registered')
    .description(
      'CLI for searching jobs. Open a new search in the browser with ease.',
    );

  if (!process.argv.slice(2).length) {
    program.outputHelp(colorGreen);
    process.exit();
  }

  program
    .command('glassdoor')
    .alias('g')
    .description('Search glassdoor jobs')
    .action(() => {
      prompt(GD_QUESTIONS).then(answers => handleGlassdoor(answers));
    });

  program
    .command('linkedin')
    .alias('l')
    .description('Search linkedin jobs')
    .action(() => {
      prompt(DEFAULT_QUESTIONS).then(answers => handleLinkedin(answers));
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
