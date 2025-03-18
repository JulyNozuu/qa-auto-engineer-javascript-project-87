import * as fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const parsing = (args) => {
  if (args[0] === '.') {
    args = path.resolve(process.cwd(), args);
  }
  
  if (args.slice(-4) == 'json'){
    const file = fs.readFileSync(args);
    return JSON.parse(file)};

  if (args.slice(-3) == 'yml'){
    return yaml.load(fs.readFileSync(args, 'utf8'));};
};

export default parsing;

