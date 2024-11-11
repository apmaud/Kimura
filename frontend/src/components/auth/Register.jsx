import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/auth/authActions'

// Form Validation 

const schema = yup
    .object()
    .shape({
        email: yup.string().required("Email is required.").email("Email format is not valid."),
        // name: yup.string().required("Username is required."),
        password: yup.string().required("Password is required.").min(8),
        confirmPassword: yup.string().required("Confirm your password").min(8).oneOf([yup.ref('password')], "The passwords do not match."),
    })
    .required();


const Register = (params) => {

    // Form validation

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
    });
    const { errors } = formState

    // Submit Function
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const dispatch = useDispatch()


    const navigate = useNavigate();

    const config = {
        headers: {
          "Content-type": "application/json",
        },
    };

    const baseURL = "http://localhost:5209/register"

    const onSubmit = async (data) => {
        delete data.confirmPassword;
        // params.setLoading(true)
        // const response = await axios
        //                         .post(baseURL, JSON.stringify(data), config)
        //                         .catch(error => console.log(error));
        // params.setLoading(false);
        dispatch(registerUser(data));


        // navigate("/dashboard")
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
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register('name')} type="name" placeholder="name" className="input input-bordered" required />
                    <label className="label">
                        <a className="text-xs">{errors.username?.message}</a>
                    </label>
                </div> */}
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
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Confirm Password</span>
                    </label>
                    <input {...register('confirmPassword')} type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a className="text-xs">{errors.confirmPassword?.message}</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
  )
}

export default Register
