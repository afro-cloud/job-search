#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const handleGlassdoor = require('./src/glassdoor');
const { GD_QUESTIONS } = require('./src/constants');

const cli = () => {
  program
    .version('1.0.0')
    .description(
      'CLI that shows you the jobs you want without manually doing it yourself'
    );

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
