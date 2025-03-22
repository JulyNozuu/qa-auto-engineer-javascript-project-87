import defaultFormat from './defaultFormat.js';
import plainFormat from './plainFormat.js';

const formatters = {
    default: defaultFormat,
    plain: plainFormat
  };

  const diffFormat = (tree, type) => {
    if (type == 'plain'){return plainFormat(tree);
        } else return formatters.default(tree);
    };
  export default diffFormat;