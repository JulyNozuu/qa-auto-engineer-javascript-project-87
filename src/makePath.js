/* eslint-disable */

import * as fs from "node:fs";
import path from "node:path";

const makePath = (filePath) => {
  if (filePath[0] === ".") {
    filePath = path.resolve(process.cwd(), filePath);
  }
  const formate = path.extname(filePath).slice(1).toLowerCase();
  const file = fs.readFileSync(filePath, "utf8");
  return { file, formate };
};

export default makePath;
