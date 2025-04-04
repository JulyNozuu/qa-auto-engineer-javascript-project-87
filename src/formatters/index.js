import plainFormat from './plainFormat.js';
import JSONFormat from './JSONFormate.js';
import defaultStringFormat from './defaultStringFormat.js';

const formatters = {
  default: defaultStringFormat,
  plain: plainFormat,
  json: JSONFormat,
};

const diffFormat = (tree, type) => {
  if (type == null) {
    return formatters.default(tree);
  }
  return formatters[type.toLowerCase()](tree);
};
export default diffFormat;
