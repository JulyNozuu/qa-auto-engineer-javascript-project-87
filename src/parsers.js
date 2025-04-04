import yaml from 'js-yaml';

const extensions = {
  json: JSON.parse,
  yml: yaml.load,
};
const parsing = ({ file, extension }) => {
  const parseFile = extensions[extension](file);
  return parseFile;
};

export default parsing;
