import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { user, loading, createUser, signIn, logOut, setLoading } = useAuth()
    const navigate = useNavigate();

    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                // console.log(displayUser)
                navigate('/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                // setLoading(false)
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">



            <div className="card w-full sm:w-2/3 md:w-1/2 p-10 shadow-2xl bg-base-100">

                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handelSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='card-body py-0'>
                    <Link to={'/register'}> <button className='btn btn-error text-white w-full'>Register</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Login;