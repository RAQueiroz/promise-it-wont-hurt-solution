let promise = Promise.resolve('Success');

promise
  .then(console.log)
  .catch(console.error);