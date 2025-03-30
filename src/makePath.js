import * as fs from 'node:fs';
import path from 'node:path';

const makePath = (args) => {
  let string;
  if (args[0] === '.') {
    string = path.resolve(process.cwd(), args);
  } else { string = args; }

  if (string.slice(-4) === 'json') {
    const formate = 'json';
    const file = fs.readFileSync(string);
    return { file, formate };
  }
  if (string.slice(-3) === 'yml') {
    const formate = 'yml';
    const file = fs.readFileSync(string, 'utf8');
    return { file, formate };
  } return 'Error make path';
};

export default makePath;
