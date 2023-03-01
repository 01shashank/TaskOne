import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'


const Header=(props)=>{
    const data = props.data
    const navigate = useNavigate()

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
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <h2 className="header2" onClick={profile}>Profile</h2 >
                        <h2 className="header2" onClick={aboutus}>About Us</h2 >
                        <h2 className="header2" onClick={dashboard}>Dashboard</h2 >
                        <Button  style={{"margin-left":"750px","border-radius":"15px","background-color":"white"}}  onClick={logout}><b>Logout</b></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header