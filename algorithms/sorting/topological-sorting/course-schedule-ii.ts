/**
210. Course Schedule II
https://leetcode.com/problems/course-schedule-ii/

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] 
indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. 
If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.


Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you 
should have finished both courses 1 and 2. 
Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]
 
Constraints:
1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const inDegreeCount = new Map();
  // With direction.
  const adjList = new Map();

  for (let i = 0; i < numCourses; i++) {
    inDegreeCount.set(i, 0);
    adjList.set(i, new Set());
  }

  for (let [cou, req] of prerequisites) {
    inDegreeCount.set(cou, inDegreeCount.get(cou) + 1);
    adjList.get(req).add(cou);
  }

  const queue = [];
  const result = [];
  for (let node of inDegreeCount.keys()) {
    if (inDegreeCount.get(node) === 0) {
      queue.push(node);
    }
  }

  while (queue.length > 0) {
    const from = queue.shift();
    result.push(from);

    for (let to of adjList.get(from)) {
      let count = inDegreeCount.get(to);
      count -= 1;
      inDegreeCount.set(to, count);
      if (count === 0) {
        queue.push(to);
      }
    }
  }

  return result.length === numCourses ? result : [];
}

// console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))
// console.log(findOrder(2, [[1,0]]))
// console.log(findOrder(1, []))
