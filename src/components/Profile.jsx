import {useLocation} from 'react-router-dom'
import '../assets/styles/ProfileStyle.scss'
import { AxiosHeaders } from 'axios'


const Profile=()=>{

    const location = useLocation()
    const data = location.state.data
    const headers = ["Username", "Full Name", "Location", "Education", "Occupation", "Hobbies"]

    return (
        <div className="home-page">
            
            <h1 className="header-profile">Profile Details</h1>

            {
                headers.map((head,index1)=>
                data.map((ele,index2)=>{
                return(
                    index1===index2 &&
                    <div className="appbar-container">
                        <th>{head}</th>
                        <tr>{ele}</tr>
                    </div>
                )}
                ))
            }


        </div>
    )
}

export default Profile