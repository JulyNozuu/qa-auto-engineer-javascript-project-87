#!/usr/bin/env node

import { Command } from 'commander';
import parsing from '../src/parsing.js';
import diff from '../src/diff.js';
// import sorted from '../src/diff.js';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const obj1 = parsing(filepath1);
    const obj2 = parsing(filepath2);
    const diffElement = diff(obj1, obj2);
    console.log(diffElement);
  });
program.parse();
