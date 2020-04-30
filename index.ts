
// ESLINT TODOS
const removeKey = (object: any, searchString: string) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in object) {
    if (prop.includes(searchString)) {
      // eslint-disable-next-line no-param-reassign
      delete object[prop];
    } else if (typeof object[prop] === 'object') removeKey(object[prop], searchString);
  }
};

const list = ['pass', 'code', 'ssn', 'social', 'birth', 'fodelse', 'födelse', 'person', 'pnr', "phone", "mail"];

// eslint-disable-next-line import/prefer-default-export
export const filter = (object: any) => {
  list.forEach((c) => removeKey(object, c));
  return {
    ...object,
  };
};
