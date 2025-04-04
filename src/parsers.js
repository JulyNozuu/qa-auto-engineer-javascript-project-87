import yaml from 'js-yaml';

const extension = {
  json: JSON.parse,
  yml: yaml.load,
};
const parsing = (args) => {
  const { file } = args;
  const { formate } = args;
  const parseFile = extension[formate](file);
  return parseFile;
};

export default parsing;
