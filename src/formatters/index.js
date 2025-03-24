
import plainFormat from './plainFormat.js';
import JSONFormat from './JSONFormate.js';
import defaultFormat from './plainFormat.js';

const formatters = {
    default: defaultFormat,
    plain: plainFormat,
    JSON: JSONFormat
  };

  const diffFormat = (tree, type) => {
    if (type == 'plain'){return plainFormat(tree);
        } else if (type == 'JSON'){return JSONFormat(tree);
        }
        else return formatters.default(tree);
    };
  export default diffFormat;