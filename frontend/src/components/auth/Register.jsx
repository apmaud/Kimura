import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
    .object()
    .shape({
        email: yup.string().required("Email is required.").email("Email format is not valid."),
        username: yup.string().required("Username is required.").min(5),
        password: yup.string().required("Password is required.").min(8),
        confirmPassword: yup.string().required("Confirm your password").min(8).oneOf([yup.ref('password')], "The passwords do not match."),
    })
    .required();

const Register = () => {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
    });

    const { errors } = formState

    const onSubmit = (data) => {
        console.log(data)
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
                        <span className="label-text">Username</span>
                    </label>
                    <input {...register('username')} type="name" placeholder="username" className="input input-bordered" required />
                    <label className="label">
                        <a className="text-xs">{errors.username?.message}</a>
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