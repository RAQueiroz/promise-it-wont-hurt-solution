function alwaysThrows(){
  throw new Error("OH NOES");
}

function iterate(n){
  console.log(n);
  return n + 1;
}

Promise.resolve(1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(err => console.log(err.message));