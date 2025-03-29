import yaml from 'js-yaml';

const parsing = (args) => {
  const { file } = args;
  const { formate } = args;
  if (formate === 'json') {
    const parseFile = JSON.parse(file);
    return parseFile;
  }

  if (formate === 'yml') {
    const parseFile = yaml.load(file, 'utf8');
    return parseFile;
  }
  return parseFile;
};

export default parsing;
