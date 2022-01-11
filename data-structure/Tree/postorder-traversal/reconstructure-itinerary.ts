/**
 * Leetcode: https://leetcode.com/problems/reconstruct-itinerary/
 *
 * You are given a list of airline tickets where tickets[i] = [fromi, toi]
 * represent the departure and the arrival airports of one flight. Reconstruct
 * the itinerary in order and return it.
 *
 * All of the tickets belong to a man who departs from "JFK", thus, the
 * itinerary must begin with "JFK". If there are multiple valid itineraries,
 * you should return the itinerary that has the smallest lexical order when
 * read as a single string.
 *
 * For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than
 * ["JFK", "LGB"].
 *
 * You may assume all tickets form at least one valid itinerary. You must use
 * all the tickets once and only once.
 */
function findItinerary(tickets: string[][]): string[] {
  // Assume all tickets are sorted.
  // tickets.sort((a, b) => )
  const map = new Map<string, string[]>();
  for (let ticket of tickets) {
    if (map.has(ticket[0]) === false) {
      map.set(ticket[0], []);
    }
    map.get(ticket[0]).push(ticket[1]);
  }

  let result = [];

  let loopCount = 10;
  function dfs(currentResult, current, count, map) {
    loopCount -= 1;
    if (loopCount === 0) {
      return;
    }
    if (count === 0) {
      result = [...currentResult];
      return;
    }

    if (map.has(current) === false || map.get(current).length === 0) {
      return;
    }

    const destinations = map.get(current);
    console.log(destinations);

    for (let i = 0; i < destinations.length; i++) {
      const destination = destinations[i];
      currentResult.push(destination);
      count -= 1;
      // updateMap
      map.get(current).slice();
      // dfs(currentResult, destination, count, map);
      // updateMap
      map.get(current).add(destination);
      count += 1;
      currentResult.pop();
    }
    return;
  }

  // dfs([], 'JFK', tickets.length, map);

  return result;
}

console.log(
  findItinerary([
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ])
); // ["JFK","MUC","LHR","SFO","SJC"]

// findItinerary([
//   ['JFK', 'SFO'],
//   ['JFK', 'ATL'],
//   ['SFO', 'ATL'],
//   ['ATL', 'JFK'],
//   ['ATL', 'SFO'],
// ]); // ["JFK","ATL","JFK","SFO","ATL","SFO"]
