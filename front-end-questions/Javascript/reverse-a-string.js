const test = (string) => {
    let newString = string.split("").reverse().join("");
    return newString;
}

console.log(test("abcd"));