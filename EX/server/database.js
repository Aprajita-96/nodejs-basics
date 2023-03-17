"use strict";

const mysql= require("mysql");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"employees"
});

db.connect((err)=>{
    if(err) throw err;
    else
        console.log("MYSQL connected");
});

class DBService{
    static instance;
    static getDBServiceInstance(){
        return this.instance ? this.instance : new DBService();
    }

    async getData(emp_no){
        try{

            const res= await new Promise((resolve,reject)=>{
                const sql=`Select * from employees where emp_no=${emp_no};`;
                db.query(sql,(err,result)=>{
                    if(err) reject(new Error(err.message))
                    resolve(result);
                });
            })
            return res;
        }catch(err){
            console.log(err);
        }

    }
}

module.exports=DBService;