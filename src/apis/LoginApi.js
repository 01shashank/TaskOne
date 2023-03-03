import axios from 'axios'

class LoginApi{

    loginApi(username,password){
        return axios.post("http://localhost:9090/user",{username,password});
    }

}

export default new LoginApi()