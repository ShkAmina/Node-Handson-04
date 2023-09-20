import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Signup() {
    const [Detail, setDetail] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    })
    const InputHandle = (event) => {
        setDetail({ ...Detail, [event.target.name]: event.target.value })
        // console.log(event)
    }

    async function SubmitResult(event) {
        event.preventDefault();

        const AxiosDetail = await axios.post(" https://handson-04-data-as.onrender.com/api/category/signup", Detail)
        //    https://handson-04-data-as.onrender.com/api/category/signup
        // http://localhost:5000/api/category/signup
        // http://localhost:5000/api/category/signup
        // https://handson-04-data-amshk.onrender.com/api/category/signup
        // https://handson-04-data-as.onrender.com/api/category/signup
        try {
            setDetail({
                name: "",
                phone: "",
                email: "",
                password: ""
            })
            console.log(AxiosDetail.data.Msg)
        }
        catch (err) { console.log(err) }
    }
    return (
        <div className='Signup' >
            <h1>Signup</h1>
            <form onSubmit={SubmitResult} >
                <div className='flex'>
                    <label>Name: <input type="text" onChange={InputHandle} name="name" placeholder='Name'></input></label>
                    <label>Phone: <input type="number" onChange={InputHandle} name="phone" placeholder='Phone'></input></label>
                    <label>Email:<input type="email" onChange={InputHandle} placeholder='Email'
                    /></label>
                    <label>Password:
                        <input type="password" onChange={InputHandle} placeholder='Password' />
                    </label>
                    <label > <button type='submit'>Register</button></label>
                </div>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
        </div>
    )
}

export default Signup