const express = require('express')//Framework
const  connectTODB = require('./model/connection'); //connection database Mongodb Atlas
const { middleware } = require('./middleware/middleware');
const app =  express();

connectTODB()

app.use(express.json())
      
app.use('/auth',require("./routes/router"))
// app.use('/company',middleware,(req,res,)=>{

// return res.status(200).json({user:req.user})

// })
const Job = require('./model/jobs');

app.use("/createjob",middleware,async(req,res)=>{

  const {title,salary,location,jd,opening} = req.body;

  const jobs = new Job({

    title,
    salary,
    location,
    jd,
    opening
  })
  await jobs.save()
  return res.status(200).json({msg:"Job Created Successfully"})
  
})

const PORT = 3000;

app.listen(PORT,()=>{

    console.log(`The local server connected successfully at ${PORT}`);
    
})