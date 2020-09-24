let/const 和 var 的区别

在 ES6 之前，JS 的 scope 只有两种，全局作用域和函数作用域，但是在 ES6 种出现了块级作用域，即使用 let/const 可以定义块级作用域。
那么在 ES6 的新特性中，最容易看到 TDZ 作用的就是使用 let/const 的使用上面。
let/const 与 var 的主要不同有两个地方:

let/const 是使用区块作用域；var 是使用函数作用域
在 let/const 声明之前就访问对应的变量与常量，会抛出 ReferenceError 错误；但在 var 声明之前就访问对应的变量，则会得到 undefined

console.log(Vname); // undefined;
console.log(Lname); // ReferenceError
var Vname = 'xiaoxiao';
let Lname = 'xiaoxiao';

实践证明当我们在未声明之前使用 var 定义的变量时会得到 undefined,但是在使用 let 未定义的变量时会抛出错误。因为 ES6 中的 let 声明的变量是不存在变量提升的作用。

var x = 10;
if (true) {
x = 20; // ReferenceError
let x;
}

ES6 明确规定，如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

typeof 的“死区”陷阱

我们都知道使用 typeof 可以用来检测给定变量的数据类型，也可以使用它来判断值是否被定义。当返回 undefined 时表示值未定义； 但是在 const/let 定义的变量在变量声明之前如果使用了 typeof 就会报错

typeof x; // ReferenceError
let x;
因为 x 是使用 let 声明的，那么在 x 未声明之前都属于暂时性死区，在使用 typeof 时就会报错。所以在使用 let/const 进行声明的变量在使用 typeof 时不一定安全喔。

typeof y; // 'undefined'
但是可以看出，如果我们只是用了 typeof 而没有去定义，也是不会报错的，从这粒可以看出只要没有明确规定使用 const/let 定义之前就是不会出错。

ES6 规定暂时性死区和 let、const 语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。
总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

在 ES6 标准中，对于 const 所声明的识别子仍然也经常为 variable(变量)，称为 constant variable(固定的变量)。以 const 声明所创建出来的常量，在 JS 中只是不能再被赋(can't re-assignment)，并不是不可被改变(immutable)的，这两种概念仍然有很大的差异。
