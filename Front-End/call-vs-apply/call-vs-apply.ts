export {};
export {};

// does not work
const f = () => {
  console.log(this.ff);
};

f.call({ ff: "test" });

// works.
const f2 = function () {
  console.log(this.ff);
};

f.call({ ff: "test" });

var person = {
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
var person2 = {
  firstName: "Mary",
  lastName: "Doe",
};
person.fullName.call(person1);
