import makePath from './makePath.js';
import parse from './parsers.js';
import diffTree from './diffTree.js';
import diffFormat from './formatters/index.js';

const genDiff = (path1, path2, formate) => {
  const openFile1 = makePath(path1);
  const openFile2 = makePath(path2);
  const parseFile1 = parse(openFile1);
  const parseFile2 = parse(openFile2);
  const treeDiff = diffTree(parseFile1, parseFile2);
  return diffFormat(treeDiff, formate);
};
export default genDiff;
