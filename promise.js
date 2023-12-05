const randomNumberPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomVal = Math.random();
    if (randomVal > 0.5) {
      resolve(randomVal);
    } else {
      reject(randomVal);
    }
  }, 1000);
});

randomNumberPromise
  .then((value) => {
    console.log("Success", value);
  })
  .catch((value) => {
    console.log("Fail", value);
  })
  .finally(() => {
    console.log("Complete");
  });
