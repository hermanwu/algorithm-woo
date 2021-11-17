export function getSlidingWindowFirstElement(
  originalArray: number[],
  windowsLength: number
) {
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i - windowsLength + 1] >= 0) {
      console.log(originalArray[i - windowsLength + 1]);
    }
  }
}
