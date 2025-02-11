import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import '../../../src/App.css';
import {  toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate =useNavigate();
    


    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        try{
            const res=await axios.post(`${process.env.REACT_APP_API}/auth/register`,{name,email,password});
            if(res.data.success){
                toast.success(res.data.message);
                console.log("done");
                navigate('/login');
            }else{
                toast.error(res.data.message)
            }
        }catch(error){
            console.log(error);
            toast.error("Invalid Email ID");
        }
    }
    
  return (
    <Layout title="Register ">
        <div className='register'>
            
            <h1 className='reg'>Register</h1>
            <form className='infoform auth-form' onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Name' className='infoInput' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <input type="email" placeholder='Email' className='infoInput user' name='username' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                <input type="password" placeholder='Password' className='infoInput' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='button i-button' type='submit'  >
                    Submit
                </button>
            </form>
        </div>
    </Layout>
  )
}

export default Register