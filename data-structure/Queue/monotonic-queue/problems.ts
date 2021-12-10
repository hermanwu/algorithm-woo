/**
 * Monotonic queue is a data structure where the data is entirely in non-decreasing order or entirely in non-increasing order.
 * It is generally used for optimizing dynamic programming techniques. Monotonic queues can be used to solve problems that require us to find the greater/min/max till a particular window. We have explained the idea with 2 problems:
 * Daily Temperatures problem Largest Rectangle in Histogram
 */

import { maxSlidingWindow } from "../../../algorithms/sliding-window/sliding-window-maximum";
import { StockSpanner } from "../../../real-life/stocks/online-stock-span";

export const map = {
  "sliding-window-maximum": maxSlidingWindow,
  "online-stock-spans": StockSpanner,
};
