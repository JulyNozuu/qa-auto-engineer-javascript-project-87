import * as fs from "node:fs";
import path from "node:path";

const parsing = (args) => {
    if (args[0] == '.'){
        args = path.resolve(process.cwd(), args);
    }
const json1 = fs.readFileSync(args);
return JSON.parse(json1);
}
    
export default parsing;
