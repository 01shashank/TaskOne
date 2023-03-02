import { useEffect } from "react"
import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";
import AuthenticationService from "./AuthenticationService";
import axios from 'axios'
import {Select,MenuItem} from '@mui/material'



const Dashboard=(props)=>{

    const[data,setData]  = useState([])

    const columns = ["Username","Full Name","Location","Education","Occupation","Hobbies"]
    //const data = [["nayana@gmail.com", "Nayan Agarwal", "Pune", "B.Tech", " SDE","Running"]]

    useEffect(()=>{
        axios.get("http://localhost:9090/allusers")
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

    const options = {   search:false,
                        filter:false,
                        download:false,
                        print:false,
                        columns:false,
                        selectableRows:false,
                        viewColumns:false,
                        responsive:true
    }

    return (
        <div>

            <div >
                <MUIDataTable 
                    data={data}
                    columns={columns}  
                    options={options}                  
                />
            </div>

            

               
        </div>
        
    );
    
}

export default Dashboard