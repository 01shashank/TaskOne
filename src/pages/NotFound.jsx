import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button'
import '../assets/styles/ProfileStyle.scss'


const NotFound=()=>{

    const navigate = useNavigate()

    function navLogin(){

        sessionStorage.removeItem('username')
        navigate('/login')
    }

    return(
        <div className='notfound-container'>
            <h1>404 Not Found</h1>
            <p>The page you are looking for is not present</p>
            <div className='row btn-login'>
                <Button variant='text' size='medium'  type='primary' onClick={navLogin}>Click Here to get back to Login</Button>
            </div>
        </div>
    )
}

export default NotFound