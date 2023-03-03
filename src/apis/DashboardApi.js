import axios from 'axios'

class DashboardApi{

    getTableData(username,password){
        return axios.get("http://localhost:9090/allusers",{username,password});
    }


}

export default new DashboardApi()