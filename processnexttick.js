setImmediate(() => {
    console.log("first");
  })
  
  process.nextTick(() => {
    console.log("second");
  })
  
  console.log("third");


  