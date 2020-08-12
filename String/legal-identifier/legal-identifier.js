/**
 * @param str: The identifier need to be judged.
 * @return: Return if str is a legal identifier.
 */
const isLegalIdentifier = function (str) {
  if (!str) {
    return false;
  }

  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    const code = str.charCodeAt(i);

    if (
      !(str[i] === "_") &&
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
};
