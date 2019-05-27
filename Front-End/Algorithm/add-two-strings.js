/**
 * Created by hermanwu on 2/28/18.
 */

let addTwoStrings = function(str1, str2) {
    let i = str1.length - 1;
    let j = str2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry == 1) {
        if ( i >= 0 ) {
            carry += str1.charAt(i) - '0';
            i--;
        }

        if ( j >= 0 ) {
            carry += str2.charAt(j) - '0';
            j--;
        }

        result = carry % 10 + result;
        carry = Math.floor(carry / 10);
    }

    return result;
};

console.log(addTwoStrings("1931", "321"));