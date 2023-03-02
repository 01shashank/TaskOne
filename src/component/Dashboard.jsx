import { useEffect } from "react"
import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import AuthenticationService from "./AuthenticationService";
import axios from 'axios'



const Dashboard=(props)=>{

    const[data,setData]  = useState([])

    const columns = ["Username","Full Name","Location","Education","Occupation","Hobbies"]
    

    useEffect(()=>{
        axios.get("http://localhost:9090/allusers")
        .then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })


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