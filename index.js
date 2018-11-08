#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const handleGlassdoor = require('./src/glassdoor');
const { GD_QUESTIONS } = require('./src/constants');
const { colorGreen } = require('./src/utils');

const cli = () => {
  program
    .version('0.0.1')
    .option('-g, --glassdoor', 'Search for jobs with Glassdoor')
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

  program.parse(process.argv);
};

cli();
