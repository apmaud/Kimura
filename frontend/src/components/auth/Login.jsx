import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/auth/authActions.js'
import { addAlert } from '../redux/alerts/alertsSlice.js'

// Form validation

const schema = yup
    .object()
    .shape({
        email: yup.string().required("Email is required.").email("Email format is not valid."),
        password: yup.string().required("Password is required.").min(8),
    })
    .required();

// Axios
axios.defaults.withCredentials = true;

const config = {
    headers: {
      "Content-type": "application/json"
    },
};

const Login = (params) => {
    
    const dispatch = useDispatch()

    // Form Validation
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
    });

    const { errors } = formState
    

    // Submit Function
    const { loading, userInfo, error, success, authenticated } = useSelector(
        (state) => state.auth
    )
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated === true) {
            navigate('/dashboard')
        }
    }, [navigate, userInfo])

    const onSubmit = async (data) => {
   
        dispatch(loginUser(data)).then(navigate('/home'))
        
        // dispatch(addAlert({
        //     message: "Login successful!",
        //     severity: "success",
        //     id: Date.now(),
        // }));
        // const action = addAlert({
        //     message: "Login successful!",
        //     severity: "success",
        //     id: Date.now(),
        // });
        // dispatch(action)

    }

    return (
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body gap-0" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register('email')} type="email" placeholder="email" className="input input-bordered" required />
                    <label className="label">
                        <a className="text-xs">{errors.email?.message}</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className='join'>
                        <input {...register('password')} type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <label className="label">
                        <a className="text-xs">{errors.password?.message}</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
