// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName, famousSong, ...restProps } = band;  // destructuring mean putting the object or arry into another varible.
  console.log(bandName);
  console.log(restProps);