const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"bengzujf65p90ibgodax-mysql.services.clever-cloud.com",
    user:"uneipvqlxzv3j5dm",
    password:"LSeArjWGueb5pJApE8uZ",
    database:"bengzujf65p90ibgodax"
})

app.get('/',(req,res)=>{
    const sql="SELECT * FROM employees";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/', (req, res, next) => {
    const sql = "INSERT INTO employees (Employee_Id, Employee_Name, Employee_Department, Employee_Salary, Employee_Address, Employee_DOB, Employee_Age, Date_Of_Joining) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.Employee_Id,
        req.body.Employee_Name,
        req.body.Employee_Department,
        req.body.Employee_Salary,
        req.body.Employee_Address,
        req.body.Employee_DOB,
        req.body.Employee_Age,
        req.body.Date_Of_Joining,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("created");
    });
});

  
app.delete('/:Employee_Id', (req, res, next) => {
    const sql = "DELETE FROM employees WHERE Employee_Id= ?";
    const Employee_Id=req.params.Employee_Id;

    db.query(sql, [Employee_Id], (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("deleted");
    });
});



app.listen(8081, ()=>{
    console.log("Listening...");
})