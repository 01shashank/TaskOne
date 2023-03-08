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
    const[isInvalid,setIsInvalid] = useState(false)
    const[resetButton,setResetButton] = useState(false)

    const loginUser= async()=>{
        try{
            if(username!=="" && password!==""){
                const response = await LoginApi.loginApi(username,password);
                AuthenticationService.registerUser(username)
                props.getData(response.data)
                navigate("/dashboard" )    
            }
            else{
                setIsInvalid(true)
            }
        }
        catch(error){
            setIsInvalid(true)
            setResetButton(true)
        }

    }

    const setInvalidFalse=()=>{
        setIsInvalid(false)
        setResetButton(false)
        setUserName("")
        setPassword("")

    }

    return (
        <div  className='container-form'>
        
            <form className=' form-login'>
                    <h1 className='header1'>LOGIN</h1>

                    {isInvalid && <div>
                        <TextField id="invalid-box" disabled data-testid="invalid-box-testid" label="Username or Password is Invalid" variant='outlined' margin='dense' type="text"  />
                    </div>}

                    <div className='row inputs'>
                        <TextField id="username" data-testid="username-testid" label="Enter the username" variant='outlined' margin='dense' type="text" required value={username} onChange={e=>setUserName(e.target.value)} name="username" />
                    </div>

                    <div className='row inputs'>
                        <TextField id="password" data-testid="password-testid" label="Enter the password" variant='outlined' margin='dense' className="" type="password" required value={password} onChange={e=>setPassword(e.target.value)} name="password"/>
                    </div>

                    <div className='row btn-login-container'>
                        <Button className="btn-login" variant='contained'  size='medium'  type='primary' onClick={e=>{e.preventDefault();loginUser()}}><b>Submit</b></Button>

                        {resetButton && <div >
                            <Button className="btn-reset" variant='contained'  size='medium'  type='primary' onClick={e=>{e.preventDefault();setInvalidFalse()}}><b>Reset</b></Button>
                        </div>}
                    </div>

            </form>
        </div>

    )
}

export default Login;