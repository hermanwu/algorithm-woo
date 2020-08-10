//hideElement(testDiv);

const allItemArray = ["coffee", "tea"];

function makeList(array) {
  const list = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(array[i]));

    list.appendChild(item);
  }

  return list;
}

const existingList = makeList(allItemArray);

const listParent = document.getElementsByClassName("option-list")[0];

listParent.appendChild(existingList);

const debounce = (fn, wait) => {
  let timeout;

  return function (args) {
    clearTimeout(timeout);

    // understand apply.
    timeout = setTimeout(() => fn(args), wait);
  };
};

const filter = (input) => {
  const str = input.key;
  const updatedArray = allItemArray.filter((item) => item.indexOf(str) > -1);
  updatedList = makeList(updatedArray);
  listParent.replaceChild(updatedList, listParent.firstChild);
};

const callBack = debounce(filter, 1000);

inputBox = document.getElementsByTagName("input")[0];

inputBox.addEventListener(
  "keydown", // use keydown here. in html is onKeyDown
  (event) => {
    callBack(event);
  }
);
