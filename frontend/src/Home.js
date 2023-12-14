import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './Style.css';


function Home() {
    const [Employee_Id, setEmployee_Id] = useState('')
    const [Employee_Name, setEmployee_Name] = useState('')
    const [Employee_Department, setEmployee_Department] = useState('')
    const [Employee_Salary, setEmployee_Salary] = useState('')
    const [Employee_Address, setEmployee_Address] = useState('')
    const [Employee_DOB, setEmployee_DOB] = useState('')
    const [Employee_Age, setEmployee_Age] = useState('')
    const [Date_Of_Joining, setDate_Of_Joining] = useState('')
    const navigate=useNavigate();
    const handleSubmit = (event) =>{
        console.log(Employee_Id,Employee_Name,Employee_Department,Employee_Salary,Employee_Address,Employee_DOB,Employee_Age,Date_Of_Joining);
        event.preventDefault();
        axios.post('https://employee-form.onrender.com',{Employee_Id,Employee_Name,Employee_Department,Employee_Salary,Employee_Address,Employee_DOB,Employee_Age,Date_Of_Joining})
        .then(res =>{
            navigate('/');
        }).catch(err => console.log(err));
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://employee-form.onrender.com')
        .then(res => setData(res.data))
        .catch(err => console.log(err));   
    })
    const handleDelete=(Employee_Id)=>{
        axios.delete('https://employee-form.onrender.com'+Employee_Id)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }
  return (
    <div>
        <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                        <h1>Enter Employee Details</h1>
                        <div className='inputs'>
                            <div className='name'>Employee_Id:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Id:' onChange={e => setEmployee_Id(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Name:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Name:' onChange={e => setEmployee_Name(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Department:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Department:' onChange={e => setEmployee_Department(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Salary:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Salary:' onChange={e => setEmployee_Salary(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Address:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Address :' onChange={e => setEmployee_Address(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_DOB:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='DD-MM-YYYY' onChange={e => setEmployee_DOB(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Employee_Age:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Age :' onChange={e => setEmployee_Age(e.target.value)} required/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Date_Of_Joining:</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='DD-MM-YYYY :' onChange={e => setDate_Of_Joining(e.target.value)} required/>
                            </div>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
        <div className='table-container'>
            <div className='main'>
                <h1> Employee Details</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Employee_Id</th>
                            <div></div>
                            <th>Employee_Name</th>
                            <div></div>
                            <th>Employee_Department</th>
                            <div></div>
                            <th>Employee_Salary</th>
                            <div></div>
                            <th>Employee_Address</th>
                            <div></div>
                            <th>Employee_DOB</th>
                            <div></div>
                            <th>Employee_Age</th>
                            <div></div>
                            <th>Date_Of_Joining</th>
                            <div></div>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr>
                                <td>{d.Employee_Id}</td>
                                <div></div>
                                <td>{d.Employee_Name}</td>
                                <div></div>
                                <td>{d.Employee_Department}</td>
                                <div></div>
                                <td>{d.Employee_Salary}</td>
                                <div></div>
                                <td>{d.Employee_Address}</td>
                                <div></div>
                                <td>{d.Employee_DOB}</td>
                                <div></div>
                                <td>{d.Employee_Age}</td>
                                <div></div>
                                <td>{d.Date_Of_Joining}</td>
                                <div></div>
                                <td>
                                    <button onClick={e=>handleDelete(d.Employee_Id)}>Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
}
export default Home