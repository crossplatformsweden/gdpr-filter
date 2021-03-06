
const removeKey = (object: any, searchString: string) => {
    for(let prop in object) {
      if (prop.includes(searchString)) {
        delete object[prop];
      }
      else if (typeof object[prop] === 'object')
        removeKey(object[prop], searchString);
    }
  }

const list = ["pass", "code", "ssn", "social","birth", "fodelse", "födelse", "person", "pnr", "phone", "email"]

export const filter = (object: any) => {
    list.forEach(c => removeKey(object, c))
    return {
        ...object
    }
}