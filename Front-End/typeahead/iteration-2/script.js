console.log("test 2");

function myFunction(event) {
  console.log(event);
}

function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}

//hideElement(testDiv);

function makeList(array) {
  const list = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(array[i]));

    list.appendChild(item);
  }

  return list;
}

const list = makeList(["coffee", "tea"]);
document.getElementsByClassName("option-list")[0].appendChild(list);

const debounce = (fn, wait) => {
  let timeout;

  return function (...args) {
    console.log("arg", args);
    console.log(fn);
    clearTimeout(timeout);

    // understand apply.
    timeout = setTimeout(() => fn.apply(args), wait);
  };
};

inputBox = document.getElementsByTagName("input")[0];

inputBox.addEventListener(
  "keydown", // use keydown here. in html is onKeyDown
  () => {
    debounce((action) => {
      console.log(action);
    }, 1000)("test");
  }
);
