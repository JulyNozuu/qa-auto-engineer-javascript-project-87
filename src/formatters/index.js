import plainFormat from "./plainFormat.js";
import JSONFormat from "./JSONFormate.js";
import defaultStringFormat from "./defaultStringFormat.js";

const formatters = {
  default: defaultStringFormat,
  plain: plainFormat,
  JSON: JSONFormat,
};

const diffFormat = (tree, type) => {
  if (type == "plain") {
    return plainFormat(tree);
  } else if (type == "JSON") {
    return JSONFormat(tree);
  } else return formatters.default(tree);
};
export default diffFormat;
