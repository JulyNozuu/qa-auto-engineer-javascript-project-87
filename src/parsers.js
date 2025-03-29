import yaml from 'js-yaml';

const parsing = (args) => {
  const { file } = args;
  const { formate } = args;
  let parseFile;
  if (formate === 'json') {
    parseFile = JSON.parse(file);
  }

  if (formate === 'yml') {
    parseFile = yaml.load(file, 'utf8');
  }
  return parseFile;
};

export default parsing;
