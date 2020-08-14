/**
 * @param str: The identifier need to be judged.
 * @return: Return if str is a legal identifier.
 */

const isLegalIdentifier = function (str) {
  if (!str) {
    return false;
  }

  if (str.charCodeAt(0) > 47 && str.charCodeAt(0) < 58) {
    return false;
  }

  let i;

  for (i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (
      str[i] !== "_" &&
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
