/**
 * Slices a given text to a specified maximum length and appends an ellipsis if the text exceeds that length.
 *
 * @param {string} txt - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the text before it gets truncated. Defaults to 50 if not provided.
 * @returns {string} - The original text if its length is less than or equal to `max`; otherwise, a truncated version with an ellipsis.
 */
export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)} ...`;
  return txt;
}
