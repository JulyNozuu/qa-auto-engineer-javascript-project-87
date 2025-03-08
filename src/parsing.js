import * as fs from "node:fs";
import { cwd } from 'node:process';

const parsing = (args) => {
const json1 = fs.readFileSync(args);
return JSON.parse(json1);
}
export default parsing;

//console.log (parsing('/Users/july/Desktop/file.json'));
//console.log(`Current directory: ${cwd()}`);