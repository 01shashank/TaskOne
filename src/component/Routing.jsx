import {Routes,Route} from 'react-router-dom';
import { useState, createContext } from 'react';
import Login from './Login'
import Dashboard from './Dashboard'
import Profile from './Profile'
import AboutUs from './Aboutus'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'
import Header from './Header'
import AuthenticationService from './AuthenticationService';

const appContext = createContext()

const Routing=(props)=>{
    
    const[data,setData]=useState([])
    const getData=(resp)=>{
        setData(resp)
    }

    const auth=AuthenticationService.isUserLoggedIn()

    return(
        <appContext.Provider value={data}>
            
            <div className='container'>
                {auth? <Header/> : null}
                <Routes>
                
                    <Route path="/" element={<PrivateRoute/>}>
                        
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/aboutus'  element={<AboutUs/>}/>
                        <Route path='*' element={<NotFound/>}/>

                    </Route>

                    <Route path='/login' element={ <Login  getData={getData}/> }  />
                    
                </Routes>

            </div>

        </appContext.Provider>
    )
}

export default Routing;
export {appContext};