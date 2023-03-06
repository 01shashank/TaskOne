import { useEffect,useState } from "react"
import MUIDataTable from "mui-datatables";
import DashboardApi from "../apis/DashboardApi";
import '../assets/styles/DashboardStyle.scss'


const Dashboard=(props)=>{

    const[data,setData]  = useState([])

    const columns = ["Username","Full Name","Location","Education","Occupation","Hobbies"]

    useEffect(()=>{
        DashboardApi.getTableData()
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

    const options = {   search:true ,
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

            <div  className="dash-table">
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