// create a class that will format

class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person("test2222");

class FormatString {
  constructor() {
    this.template = "I am <%name%> name";
  }

  format(person) {
    let result = this.template;
    Object.keys(person).forEach(key => {
      console.log(key);
      const keyString = "<%" + key + "%>";

      if (result.indexOf(keyString)) {
        const startIndex = result.indexOf(keyString);
        result =
          result.slice(0, startIndex) +
          person[key] +
          result.slice(startIndex + keyString.length);
      }
    });

    return result;
  }
}

const formatString = new FormatString();
console.log(formatString.format(person));
// console.log(formatString.format(person))
