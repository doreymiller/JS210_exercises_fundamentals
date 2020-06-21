let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(obj, props) {
  let returnObj = {};
  
  if (props) {
    props.forEach(function (prop) {
      returnObj[prop] = obj[prop];
    });
    return returnObj;
  } else {
    return Object.assign(returnObj, obj);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined