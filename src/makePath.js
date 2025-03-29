import * as fs from 'node:fs';
import path from 'node:path';

const makePath = (string) => {
  let args = string;
  if (args[0] === '.') {
    args = path.resolve(process.cwd(), args);
  }

  if (args.slice(-4) === 'json') {
    const formate = 'json';
    const file = fs.readFileSync(args);
    return { file, formate };
  }
  if (args.slice(-3) === 'yml') {
    const formate = 'yml';
    const file = fs.readFileSync(args, 'utf8');
    return { file, formate };
  } return 'Error make path';
};

export default makePath;
