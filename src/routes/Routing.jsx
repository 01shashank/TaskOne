import {Routes,Route} from 'react-router-dom';
import { useState, createContext } from 'react';
import Login from '../pages//Login'
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import AboutUs from '../components/Aboutus'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoute'
import Header from '../layout/Header'
import AuthenticationService from '../services/AuthenticationService';

const appContext = createContext()

const Routing=(props)=>{
    
    const[data,setData]=useState([])
    const getData=(resp)=>{
        setData(resp)
    }

    return(
        <appContext.Provider value={data}>
            
            <div className='container'>
                {AuthenticationService.isUserLoggedIn()  && <Header/>}
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