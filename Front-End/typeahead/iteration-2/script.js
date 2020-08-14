const allItemArray = ["coffee", "tea"];
const listParent = document.getElementsByClassName("option-list")[0];

const existingList = makeList(allItemArray);
listParent.appendChild(existingList);

// set up call back for debounce.
const callBack = debounce(filterList, 1000);

// listened to the input box.
inputBox = document.getElementsByTagName("input")[0];
inputBox.addEventListener(
  "keydown", // use keydown here. in html is onKeyDown
  (event) => {
    callBack();
  }
);

// private functions.
/**
 * create a dom list.
 * @param {*} array
 */
function makeList(array) {
  const list = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(array[i]));

    list.appendChild(item);
  }

  return list;
}

/**
 * debounce helper function
 * @param {*} fn
 * @param {*} wait
 */
function debounce(fn, wait) {
  let timeout;

  return function (args) {
    clearTimeout(timeout);

    // understand apply.
    timeout = setTimeout(() => fn(args), wait);
  };
}

/**
 * filter function to append new list.
 */
function filterList() {
  const inputVal = document.getElementsByTagName("input")[0].value;
  console.log(inputVal);
  const updatedArray = allItemArray.filter(
    (item) => item.indexOf(inputVal) > -1
  );
  updatedList = makeList(updatedArray);
  listParent.replaceChild(updatedList, listParent.firstChild);
}
