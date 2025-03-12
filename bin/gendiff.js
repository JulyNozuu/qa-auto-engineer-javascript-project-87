#!/usr/bin/env node

import parsing from '../src/parsing.js';
import diff from '../src/diff.js';
import { Command } from 'commander';
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1,filepath2) => {
    const obj1 = parsing(filepath1);
    const obj2 = parsing(filepath2);
    const sorted = diff(obj1,obj2).sort((a, b) => {
      if (a[3] < b[3]) {
        return -1;
      }
      if (a[3] < b[3]) {
        return 1;
      }
      return 0;
  }
  );
  const format = () => {
    return `{${sorted.join('\n')}\n}`;
};
  console.log(format())});
  program.parse();