"use strict";

const express= require("express");
const cors= require("cors");

const database= require("./database.js");

const app=express();
app.use(cors());
app.use(express.json());


app.post('/read',(request,response)=>{
    const {emp_no}=request.body;

    const db=database.getDBServiceInstance();
    const result= db.getData(emp_no);

    result.then(data=> response.json({item:data}))
        .catch(err=>console.log(err));
})

app.listen(5000, ()=>{
    console.log("App is running");
})