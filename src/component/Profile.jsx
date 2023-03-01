import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import {useLocation} from 'react-router-dom'
import TextField from '@mui/material/TextField'



const Profile=()=>{

    const location = useLocation()
    const data = location.state.data
    console.log(data)

    return (
        <div className="home-page">
            <h1 style={{  "font-size":"35px"}} >Profile Details</h1    >

            <div className="appbar-container">
                <th>Username</th>
                <tr>{data[0]}</tr>
            </div><br/>
            
            <div className="appbar-container">
                <th>Full Name</th>
                <tr>{data[1]}</tr>
           </div><br/>

            <div className="appbar-container">
                <th>Location</th>
                <tr>{data[2]}</tr>
            </div><br/>
           
           <div className="appbar-container">
                <th>Education</th>
                <tr>{data[3]}</tr>
           </div><br/>
           
           <div className="appbar-container">
                <th>Occupation</th>
                <tr>{data[4]}</tr>
           </div><br/>
           
           <div className="appbar-container">
                <th>Hobbies</th>
                <tr>{data[5]}</tr>
           </div>
           

        </div>
    )
}

export default Profile