class AuthenticationService{

    registerUser(username){
        sessionStorage.setItem('username',username)
    }

    isUserLoggedIn(){
        if(sessionStorage.getItem('username')!=null) return true
        else return false
    }

    removeUser(){
        sessionStorage.removeItem('username')
    }
}

export default new AuthenticationService()