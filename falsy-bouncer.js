// Returns array with all falsy values removed
function bouncer(arr) {

  // filter passing a function that checks type
  return arr.filter(function (item) {
    if (typeof(item) === "number" && item !== 0 || typeof(item) === "string" && item !== "") {
        return item;
      }
      
  });
}

bouncer([7, "ate", "", false, 9]);