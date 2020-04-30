const express = require('express');
let app = express();

app.get('/',(req,res)=>{
  if(req.query.name === undefined){
    res.status(200).send('Hello World');
  }
  else{
    res.status(200).send('Hello '+req.query.name);
  }
});


app.listen(3000,()=>{console.log('Server has started');});
