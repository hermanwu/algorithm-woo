console.log('test 2')


function myFunction(event) {
  console.log(event)
}

function showElement(element) {
  element.style.display = 'block'
}

function hideElement(element) {
  element.style.display = 'none'
}

//hideElement(testDiv);

function makeList(array) {
  const list = document.createElement('ul');
  for (let i = 0; i < array.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(array[i]));

    list.appendChild(item);
  }

  return list;
}

const list = makeList(['coffee', 'tea']);
document.getElementsByClassName('option-list')[0].appendChild(list);
