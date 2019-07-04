import {
  Observable,
  Subject,
  ReplaySubject,
  from,
  of,
  range,
  bindCallback,
  timer
} from "https://dev.jspm.io/rxjs@6/_esm2015";
import {
  map,
  filter,
  switchMap,
  concatAll,
  last,
  debounce
} from "https://dev.jspm.io/rxjs@6/_esm2015/operators";

const searchTextStream = new Subject();

//const searchTextStream$ = searchTextStream.asObservable();

function showMe(e) {
  searchTextStream.next(e.value);
}

const testObservable = Observable.create(observer => {
  this.showMe
});

function getResponse1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("response 1");
    }, 5000);
  });
}

function getResponse2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("response 2");
    }, 1000);
  });
}

const asyncCalls = [getResponse1, getResponse2];

const searchResultStream$ = searchTextStream.asObservable().pipe(
  // last()
  debounce(() => timer(1000)),
  switchMap(text => {
    const index = text % 2;
    return asyncCalls[index]();
  })
);

const subscription = searchResultStream$.subscribe(data => {
  console.log(data);
});

// const searchResult = ["abc", "abcd"];

// function getResponse() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(searchResult);
//       resolve(searchResult);
//     }, 3000);
//   });
// }

window.showMe = showMe;
