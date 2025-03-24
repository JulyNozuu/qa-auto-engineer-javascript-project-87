import diff from '../src/diffTree';
import { readFileSync } from 'node:fs';
import * as fs from 'node:fs';
import yaml from 'js-yaml';

const pathJSON1 = fs.readFileSync(new URL('__fixtures__/test1.json', import.meta.url));
const pathJSON2 = fs.readFileSync(new URL('__fixtures__/test2.json', import.meta.url));
const YAMl1 = fs.readFileSync(new URL('__fixtures__/test1yml.yml', import.meta.url), 'utf8');
const YAMl2 = fs.readFileSync(new URL('__fixtures__/test2yml.yml', import.meta.url), 'utf8');
const pathResult = fs.readFileSync(new URL('__fixtures__/result.txt', import.meta.url), 'utf8');
const pathResultPlain = fs.readFileSync(new URL('__fixtures__/resultPlain.txt', import.meta.url), 'utf8');
const pathResultJSON = fs.readFileSync(new URL('__fixtures__/resultJSON.txt', import.meta.url), 'utf8');


test('check_default_formate', () => {
    expect(diff(JSON.parse(pathJSON1),JSON.parse(pathJSON2))).toEqual(pathResult);
  });

test('checkYAML_default_formate', () => {
  expect(diff(yaml.load(YAMl1),yaml.load(YAMl2),)).toEqual(pathResult);
});

test('check_plain_formate', () => {
  expect(diff(JSON.parse(pathJSON1),JSON.parse(pathJSON2),'plain')).toEqual(pathResultPlain);
});

test('checkYAML_plain_formate', () => {
  expect(diff(yaml.load(YAMl1),yaml.load(YAMl2),'plain')).toEqual(pathResultPlain);
});

test('check_JSON_formate', () => {
  expect(diff(JSON.parse(pathJSON1),JSON.parse(pathJSON2),'JSON')).toEqual(pathResultJSON);
});

test('checkYAML_JSON_formate', () => {
  expect(diff(yaml.load(YAMl1),yaml.load(YAMl2),'JSON')).toEqual(pathResultJSON);
});




