import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
function Login() {

    const [detail,setDetail]=useState({
        email: "",
        password: ""
    })
    const handleInput = (event) => {
        setDetail({ ...detail, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    async function SubmitResult(event){
        event.preventDefault();
        localStorage.clear()

        await axios.post("https://handson-04-data-amshk.onrender.com/api/category/login", detail)
        .then((res)=>{console.log(res.data);localStorage.setItem('token', res.data.token)})
        .catch((err) => console.log(err))
        console.log(localStorage.getItem('token'))
        // console.log(submit)
    }
    return (
        <div className='Signup'>
            <h1>Login</h1>
            <form onSubmit={SubmitResult}  >
                <div className='flex'>
                <label >Email:<input type="email"  onChange={handleInput} placeholder='Email'
                /></label>
                <label >Password:<input type="password"  onChange={handleInput} placeholder='Password'
                /></label>
                 
              <label > <button type='submit'>Login</button></label>
                </div>
        
            </form>
<br />
<p>OR</p>
<br />
<Link to="/register">Don't have an account register here</Link>
        </div>
    )
}

export default Login