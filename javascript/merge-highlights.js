/*

Same as merge intervals

 */

function mergeHighlights(highlights) {

    highlights.sort(function (intervalA, intervalB) {
        if (intervalA[0] !== intervalB[0]) {
            return intervalA[0] - intervalB[0];
        }

        if (intervalA[0] === intervalB[0]) {
            return intervalA[1] - intervalB[1];
        }

        return 0;
    });

    let results = [];
    let start = highlights[0][0];
    let end = highlights[0][1];

    for (let i = 1; i < highlights.length; i++) {
        if (highlights[i][0] <= end) {
            end = Math.max(end, highlights[i][1]);
        } else {
            results.push([start, end]);
            start = highlights[i][0];
            end = highlights[i][1];
        }
    }

    results.push([start, end]);

    return results;
}