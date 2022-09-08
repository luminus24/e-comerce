import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './login.css'

const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()

    const submit = data =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res =>{
                localStorage.setItem('token',res.data.data.token)
            })
            .catch(err => console.log(err))
        reset({
            email: '',
            password: ''
        })
    }

    return (
        <form className='login-form' onSubmit={handleSubmit(submit)}>
            <h2 className='login__title'>Enter your email and Password</h2>
            <div className='login__div__email'>
                <label  className='login__label' htmlFor="email">Email</label>
                <input className='login__input' type="text" id='email' {...register('email')}/>
            </div>
            <div className='login__div__password'>
                <label className='login__label' htmlFor="password">Password</label>
                <input className='login__input' type="password" id='password' {...register('password')} />
            </div>
            <button className='login__btn'>Login</button>
        </form>
    )
}

export default FormLogin