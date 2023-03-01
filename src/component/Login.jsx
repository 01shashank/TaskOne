import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import AuthenticationService from './AuthenticationService';


const Login=(props)=>{
    
    const navigate = useNavigate()
    const[username,setUserName] = useState("")
    const[password,setPassword] = useState("")

    const loginUser=()=>{
        if(username!=="" && password!==""){
            axios.post("http://localhost:9090/user",{username,password})
            .then((response)=>{
                AuthenticationService.registerUser(username)
                props.getData(response.data)
                navigate("/dashboard" ,{state:{data:response.data}})    
            })
            .catch((error)=>{
                console.log(error)
            })
        }

    else{
        window.alert("Please Enter Credentials")
    }

            
    }

    return (
        <div>
        
            <form className=' form-login'>
                <div  className='container-form'>
                    <h1 className='header1'>LOGIN</h1>

                    <div className='row inputs'>
                        <TextField id="username"  label="Enter the username" variant='outlined' margin='dense' type="text" required value={username} onChange={e=>setUserName(e.target.value)} name="username" />
                    </div>

                    <div className='row inputs'>
                        <TextField id="password"  label="Enter the password" variant='outlined' margin='dense' className="" type="password" required value={password} onChange={e=>setPassword(e.target.value)} name="password"/>
                    </div>


                    <div className='row btn-login'>
                        <Button variant='contained' style={{height: "40px",width:"100px", "border-radius":"20px"}}  size='medium'  type='primary' onClick={e=>{e.preventDefault();loginUser()}}><b>Submit</b></Button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login;