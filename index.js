/**
 * @typedef {Object} FactorialResult
 * 
 * @property {number} input - The input to the factorial function.
 * @property {number} output - The output of the factorial function.
 */

/**
 * @callback FactorialCallback
 * 
 * @param {Error} error - The error that occurred during the calculation, if any.
 * @param {FactorialResult} result - The result of the calculation.
 */

/**
 * @description A function that calculates the factorial of a number using recursion.
 * 
 * @param {number} n - The number for which to calculate the factorial.
 * 
 * @returns {number} The factorial of `n`.
 * 
 * @throws {TypeError} If the input is not a number.
 * 
 * @example
 * factorial(5);
 * // returns 120
 */
function factorial(n) {
  if (typeof n !== "number") {
    throw new TypeError("Input must be a number");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * @description A version of the factorial function that returns the result via a callback.
 * 
 * @param {number} n - The number for which to calculate the factorial.
 * @param {FactorialCallback} callback - The function to call with the result of the calculation.
 * 
 * @returns {void}
 * 
 * @example
 * factorialWithCallback(5, (error, result) => {
 *   if (error) {
 *     console.error(error);
 *   } else {
 *     console.log(result);
 *   }
 * });
 * // logs { input: 5, output: 120 }
 */
function factorialWithCallback(n, callback) {
  /**
   * @type {FactorialResult}
   */
  const result = {
    input: n,
    output: factorial(n),
  };
  try {
    callback(null, result);
  } catch (error) {
    callback(error);
  }
}
