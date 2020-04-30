
const removeKey = (object: any, searchString: string) => {
    for(let prop in object) {
      //console.log(prop)
      if (prop.includes(searchString)) {
        delete object[prop];
      }
      else if (typeof object[prop] === 'object')
        removeKey(object[prop], searchString);
    }
  }

<<<<<<< HEAD
const list = ['pass', 'code', 'ssn', 'social', 'birth', 'fodelse', 'födelse', 'person', 'pnr', "phone", "mail"];
=======
const list = ["pass", "code", "ssn", "social","birth", "fodelse", "födelse", "person", "pnr"]
>>>>>>> parent of cf72653... added lint

export const filter = (object: any) => {
    list.forEach(c => removeKey(object, c))
    console.log(object)
    return {
        ...object
    }
}