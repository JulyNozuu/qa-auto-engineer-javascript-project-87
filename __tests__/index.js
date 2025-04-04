import * as fs from 'node:fs';
import genDiff from '../src';

const getFixturePathnew = (path) => new URL(path, import.meta.url);
const readFile = (filename) => fs.readFileSync(getFixturePathnew(filename), 'utf8');

const pathJSON1 = './__tests__/__fixtures__/test1.json';
const pathJSON2 = './__tests__/__fixtures__/test2.json';
const YAMl1 = './__tests__/__fixtures__/test1yml.yml';
const YAMl2 = './__tests__/__fixtures__/test2yml.yml';
const pathResult = '__fixtures__/result.txt';
const pathResultPlain = '__fixtures__/resultPlain.txt';
const pathResultJSON = '__fixtures__/resultJSON.txt';

test.each([
  { file1: pathJSON1, file2: pathJSON2, result: readFile(pathResult) },
  { file1: YAMl1, file2: YAMl2, result: readFile(pathResult) },
])('check_default_formate', ({ file1, file2, result }) => {
  expect(genDiff(file1, file2)).toEqual(result);
});

test.each([
  { file1: pathJSON1, file2: pathJSON2, result: readFile(pathResultPlain) },
  { file1: YAMl1, file2: YAMl2, result: readFile(pathResultPlain) },
])('check_plain_formate', ({ file1, file2, result }) => {
  expect(genDiff(file1, file2, 'plain')).toEqual(result);
});

test.each([
  { file1: pathJSON1, file2: pathJSON2, result: readFile(pathResultJSON) },
  { file1: YAMl1, file2: YAMl2, result: readFile(pathResultJSON) },
])('check_json_formate', ({ file1, file2, result }) => {
  expect(genDiff(file1, file2, 'json')).toEqual(result);
});
