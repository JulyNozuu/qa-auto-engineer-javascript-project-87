import yaml from 'js-yaml';

const parsing = (args) => {
  const { file } = args;
  const { formate } = args;
  if (formate === 'json') {
    return JSON.parse(file);
  }

  if (formate === 'yml') {
    return yaml.load(file, 'utf8');
  }
};

export default parsing;
