function parsePromised(json){
  return new Promise((res, rej)=>{
    try{
      const obj = JSON.parse(json);
      res(obj);
    }
    catch(err){
      rej(err.message);
    }
  });
}

// console.log(process.argv[2]);

parsePromised(process.argv[2])
  .then(console.log)
  .catch(console.log);