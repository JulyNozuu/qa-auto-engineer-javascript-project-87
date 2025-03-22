#!/usr/bin/env node

import { Command } from 'commander';
import parsing from '../src/parsers.js';
import diff from '../src/diffTree.js';
import diffFormat from '../src/formatters/index.js';

// import sorted from '../src/diff.js';
const program = new Command();
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const obj1 = parsing(filepath1);
    const obj2 = parsing(filepath2);
    const tree = diff(obj1,obj2, options.format);
    console.log(tree);
  });
program.parse();
