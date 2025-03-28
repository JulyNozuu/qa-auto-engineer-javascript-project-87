import defaultStringFormat from "./defaultStringFormat.js";

const JSONFormat = (tree) => {
  return JSON.stringify(tree, null, 2);
};
export default JSONFormat;
