module.exports = function reverse (n) {
  const str = n.toString();
  const reverse = str.split("").reverse().join("");
  return parseInt(reverse, 10);
}
