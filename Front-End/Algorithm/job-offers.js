/*
 Given scores = [4, 8, 7], lowerLimits = [2, 4], and upperLimits = [8, 4], we perform the following q = 2 queries:

 - Find all the scores in the inclusive range [2, 8]:
 there are three such candidates (i.e., scores 4, 7, and 8), so we store 3 in index 0 of our return array.
 - Find all the scores in the inclusive range [4, 4]:
 there is one such candidate (i.e., score 4), so we store 1 in index 1 of our return array.

 The function then returns the array [3, 1].

 */


function jobOffers(scores, lowerLimits, upperLimits) {
    let results = new Array(lowerLimits.length).fill(0);

    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < lowerLimits.length; j++) {
            if (scores[i] <= upperLimits[j] &&
                scores[i] >= lowerLimits[j]) {
                results[j]++;
            }
        }
    }

    return results;
}

