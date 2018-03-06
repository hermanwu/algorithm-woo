/**

 Utilizing callbacks and closures allows JavaScript programmers to tackle a number of problems.
 This question tests the candidate's ability to utilize these techniques to implement a function similar to AngularJS' filter.

 */

let data = [
    {
        name: "item 1",
        checked: true
    },
    {
        name: "item 2",
        checked: true
    },
    {
        name: "item 3",
        checked: false
    }
]

let myFilter = { checked: true };

let filterArray = $filter('filter')(data, myFilter);

console.log(filterArray);


function $filter(filterType) {
    switch (filterType) {
        case 'filter':
            return function filterArray(arrayToFilter, filterObject) {

                let keys = Object.keys(filterObject);
                let values = Object.values(filterObject);

                return arrayToFilter.filter(item => {
                    for (let i = 0, length = keys.length; i < length; i++) {
                        if (item[keys[i]] != values[i]) {
                            return false;
                        }

                        return true;
                    }
                });
            };

        default:
            throw 'Filter type not defined';
    }
}
