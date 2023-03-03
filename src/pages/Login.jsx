import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import LoginApi from '../apis/LoginApi';
import AuthenticationService from '../services/AuthenticationService';
import '../assets/styles/LoginStyle.scss'


const Login=(props)=>{
    
    const navigate = useNavigate()
    const[username,setUserName] = useState("")
    const[password,setPassword] = useState("")

    const loginUser=()=>{
        if(username!=="" && password!==""){
            LoginApi.loginApi(username,password)
            .then((response)=>{
                AuthenticationService.registerUser(username)
                props.getData(response.data)
                navigate("/dashboard" )    
            })
            .catch((error)=>{
                window.alert('Invalid Credentials')
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


                    <div className='row btn-login-container'>
                        <Button className="btn-login" variant='contained'  size='medium'  type='primary' onClick={e=>{e.preventDefault();loginUser()}}><b>Submit</b></Button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login;