var nums = [1, 2, 3, 4, 5];

var sum = nums.map(function (num) {
  return num + num;
});

console.log(sum);

var names = ["ivan", "kate", "vita", "igor", "alex", "oleg"];

var capitalizedNames = names.map(function (name) {
  let firstLatter = name[0];
  console.log(firstLatter);
  return firstLatter.toUpperCase() + name.substring(1);
});
console.log(capitalizedNames);
