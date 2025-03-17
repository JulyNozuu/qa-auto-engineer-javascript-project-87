import diff from '../src/diff.js';
import { readFileSync } from 'node:fs';
import * as fs from 'node:fs';
import path from 'node:path';

const pathJSON1 = fs.readFileSync(new URL('__fixtures__/test1.json', import.meta.url));
const pathJSON2 = fs.readFileSync(new URL('__fixtures__/test2.json', import.meta.url));
const pathResult = fs.readFileSync(new URL('__fixtures__/result.txt', import.meta.url), 'utf8');
console.log(pathResult);

test('checkJSON', () => {
    expect(diff(JSON.parse(pathJSON1),JSON.parse(pathJSON2))).toEqual(pathResult);
  });

  
