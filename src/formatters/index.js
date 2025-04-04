import _ from 'lodash';
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
  if (!_.includes(Object.keys(formatters), type)) {
    return Error(`Unknown type: ${type}`);
  }
  return formatters[type.toLowerCase()](tree);
};
export default diffFormat;
