import yaml from "js-yaml";

const parsing = (args) => {
  const file = args.file;
  const formate = args.formate;
  if (formate == "json") {
    return JSON.parse(file);
  }

  if (formate == "yml") {
    return yaml.load(file, "utf8");
  }
};

export default parsing;
