/**
 * This function returns a random number between `min` and `max`
 * @param {number} min
 * @param {number} max
 * @param {number} decimalPlaces
 * @returns {number}
 */
export default function randomNumber(min, max, decimalPlaces = 2) {
  return Number((Math.random() * (max - min) + min).toFixed(decimalPlaces));
}
