let object1={
    name:"moo",
    age:100
};

function objectFlip(obj) {
    const ret = {};
    Object.keys(obj).forEach(key => {
      ret[obj[key]] = key;
    });
    return ret;
  }

  console.log(objectFlip(object1));