import axios from 'axios'

class DashboardApi{

    getTableData(username,password){
        return axios.get("http://localhost:9090/allusers");
    }


}

export default new DashboardApi()