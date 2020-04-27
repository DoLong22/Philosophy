var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  //var check = true;
  
  function getObjectKey(obj, arr) {
    for (var x in obj) {
      arr.push(x);
      if (typeof(obj[x]) == "object") {
        getObjectKey(obj[x], arr);
      }
    }
    return arr;
  }
var arr = getObjectKey(apartment,[])
arr.forEach(element => {
   console.log(element) 
});