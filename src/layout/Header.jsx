import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import {Select,MenuItem} from '@mui/material'
import {useContext} from 'react'
import {appContext} from '../routes/Routing'
import '../assets/styles/HeaderStyle.scss'

const Header=(props)=>{
    
    const navigate = useNavigate()
    const appUseContext = useContext(appContext)
    const data = appUseContext

    function logout(){
        sessionStorage.removeItem('username')
        navigate('/login')
    }

    function profile(){
        navigate('/profile',{state:{data:data}})
    }

    function aboutus(){
        navigate('/aboutus')
    }

    function dashboard(){
        navigate('/dashboard')
    }

    return(
        <div className="header-container">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <h2 className="header-one" onClick={dashboard}>Dashboard</h2 >
                        <h2 className="header-two" onClick={aboutus}>About Us</h2 >                     

                        <Select className="header-select" value={2}>
                            <MenuItem value={1}><Button onClick={profile}>Profile</Button></MenuItem>
                            <MenuItem value={2}><Button onClick={logout}>Logout</Button></MenuItem>

                        </Select>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header