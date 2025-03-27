import genDiff from "../src";
import * as fs from "node:fs";

const pathJSON1 = "./__tests__/__fixtures__/test1.json";
const pathJSON2 = "./__tests__/__fixtures__/test2.json";
const YAMl1 = "./__tests__/__fixtures__/test1yml.yml";
const YAMl2 = "./__tests__/__fixtures__/test2yml.yml";
const pathResult = fs.readFileSync(
  new URL("__fixtures__/result.txt", import.meta.url),
  "utf8"
);
const pathResultPlain = fs.readFileSync(
  new URL("__fixtures__/resultPlain.txt", import.meta.url),
  "utf8"
);
const pathResultJSON = fs.readFileSync(
  new URL("__fixtures__/resultJSON.txt", import.meta.url),
  "utf8"
);

test.each([
  { file1: pathJSON1, file2: pathJSON2, result: pathResult },
  { file1: YAMl1, file2: YAMl2, result: pathResult },
])("check_default_formate", ({ file1, file2, result }) => {
  expect(genDiff(file1, file2)).toEqual(result);
});

test.each([
  { file1: pathJSON1, file2: pathJSON2, result: pathResultPlain },
  { file1: YAMl1, file2: YAMl2, result: pathResultPlain },
])("check_plain_formate", ({ file1, file2, result }) => {
  expect(genDiff(file1, file2, "plain")).toEqual(result);
});

test.each([
  { file1: pathJSON1, file2: pathJSON2, result: pathResultJSON },
  { file1: YAMl1, file2: YAMl2, result: pathResultJSON },
])("check_plain_formate", ({ file1, file2, result }) => {
  expect(genDiff(file1, file2, "JSON")).toEqual(result);
});
