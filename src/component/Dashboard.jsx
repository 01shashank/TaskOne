import { useEffect } from "react"
import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import AuthenticationService from "./AuthenticationService";



const Dashboard=(props)=>{
    const navigate = useNavigate()

    const columns = ["Username","Full Name","Location","Education","Occupation","Hobbies"]
    const data = [
        ["jinayshah@gmail.com","Jinay Shah","Mumbai","P.hd","Assistant Professor","Reading, Swimming"],
        ["shivani@yahoo.com","Shivani Singh","Bangalore","M.com","HR","Dancing"],
        ["parthpatel@gmail.com","Parth Patel","Delhi","MBA","Finance Professional","Gymming"],
        ["anandp@rediffmail.com","Anand Pai","Chennai","M.Sc Science","Space Scientist","Sketching"],
        ["pradnya@gmail.com","Pradnya Velu","Hyderabad","B.Tech","Software Developer","Fitness"]
    ]


    // function logout(){
    //     AuthenticationService.removeUser()
    //     navigate("/login")
    // }

    // function profile(){
    //     navigate("/profile",{state:{data:location.state.data}})
    // }

    // function aboutus(){
    //     navigate("/aboutus")
    // }

    return (
        <div>

            <div >
                <MUIDataTable 
                    data={data}
                    columns={columns}                    
                />
            </div>



            
               
        </div>
        
    )
    
}

export default Dashboard