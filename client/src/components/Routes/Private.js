import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import Spinner from '../Spinner';

export default function Private(){
  const [ok,setOk]=useState(false);
  const [auth,setAuth]=useAuth();
  useEffect(()=>{
    const authCheck=async()=>{
        const res= await axios.get(`${process.env.REACT_APP_API}/auth/user-auth`)
        if(res.data.ok){
            console.log(res.data.ok)
            setOk(true);
        }else{
            setOk(false);
        }
    }
    if(auth?.token) authCheck()
  },[auth?.token]);
  return ok? <Outlet/>:<Spinner path=''/>
    
}