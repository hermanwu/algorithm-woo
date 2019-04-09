// find node by id
const findNodeById = (id) => {
  return document.getElementById(id);
}

// find node by class
const findElementsByClass = (className) => {
  return document.getElementsByClassName(className.slice(1));
}

const newDiv = document.createElement('div');
newDiv.innerHTML = '<div class="test"></div>';

console.log(newDiv.findElementsByClass('.test'));