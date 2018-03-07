/**
 * @param {number[][]} M
 * @return {number}
 */

// Use javascript object as hash map
var findCircleNum = function(M) {
    let size = M.length;
    let result = 0;
    let visited = {};
    let dfs = (i) => {
        if (visited[i]) {
            return;
        }

        visited[i] = true;

        for (var j = 0; j < size; j++) {
            if (M[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    };

    for (let i = 0; i < size; i++) {
        if (!visited[i]) {
            result++;
            dfs(i);
        }
    }

    return result;
};

// Use javascript Set
var findCircleNum = function(M) {
    let size = M.length;
    let result = 0;
    let visited = new Set();
    let dfs = (i) => {
        if (visited.has(i)) {
            return;
        }

        visited.add(i);

        for (var j = 0; j < size; j++) {
            if (M[i][j] === 1 && !visited.has(j)) {
                dfs(j);
            }
        }
    };

    for (let i = 0; i < size; i++) {
        if (!visited.has(i)) {
            result++;
            dfs(i);
        }
    }

    return result;
};