/* eslint-disable */

const plainFormat = (tree) => {
  let result = '';
  for (const element of tree) {
    if (element.action === 'removed') {
      result = `${result}Property '${element.key}' was removed\n`;
    } else if (element.action === 'updated') {
      result = `${result}Property '${element.key}' was updated. From ${element.obj1} to ${element.obj2}\n`;
    } else if (element.action === 'added') {
      result = `${result}Property '${element.key}' was added with value: ${element.obj}`;
    }
  }
  return result;
};
export default plainFormat;
