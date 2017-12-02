function all(promise1, promise2){
  return new Promise((res, rej)=>{
    let counter = 0;
    let result = [];
    
    function checkResult(){
      if(counter === 2){
        res(result);
      }
    }

    promise1.then(data => {
      counter++;
      result.push(data);
      checkResult();
    });
    promise2.then(data => {
      counter++;
      result.push(data);
      checkResult();
    });
    
    if(counter === 2){
      res(result);
    }

  });
}

all(getPromise1(), getPromise2())
  .then(console.log)
  .catch(err => console.error(err.message));