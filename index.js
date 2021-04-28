// Numbers
var a = 1;
var f = .2;
// Stirngs
var b = 'hello world';
var c = "hello world";

// Boolean
var d = true || false;

// JS Types
var un = undefined;
var nu = null;

// Array: Can contain any type of values inside
var arr = [1,2,3, 'hello', false, null, [1,2,3,4, {}]];

// Object
var obj = {
  test: 123,
  arr: [],
  bool: true,
  fun: function () {
    console.log('Called from object "obj"');
  }
};
obj.fun();
console.log('Access to object parameters', obj.test, obj.fun);

// Function declaration
function _add(x, y) {
  return x + y;
}
var res = _add(2, 5);
console.log('Result of "_add"', res);

// Function assignment
var add = function (x, y) {
  return x + y;
}
res = add(5,6)
console.log('Result of "add"', res);


// If statments
const rand = Math.round(Math.random() * 100);
if (rand > 85) {
  console.log('Ow my its bigger then 85!', rand);
} else if (rand > 45) {
  console.log('Ow... its smaller then 45', rand);
} else {
  console.log('eh... it\'s so small', rand);
}

// For loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

