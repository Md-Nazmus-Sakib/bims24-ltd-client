import React, { useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { user, loading, createUser, signIn, logOut, setLoading, resetPassword } = useAuth();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const [error, setError] = useState('');

    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                // console.log(displayUser)
                if (result.user.emailVerified) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Log in Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                    setLoading(false)
                }
                else {
                    Swal.fire({
                        title: "Check Your Email to Verify?",

                        icon: "question"
                    });
                    setLoading(false)
                }
            })
            .catch(error => {
                // setLoading(false)
                // console.log(error.message)
                setError(error.message)
                setLoading(false)
            })
    }
    const handelForgetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        setError('')
        if (!email) {
            Swal.fire({
                title: "Provide An Email ?",

                icon: "question"
            });
            setError('Provide An Email ?')
            setLoading(false)
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            Swal.fire({
                title: "Provide An Valid Format Email ?",

                icon: "question"
            });
            setError('Provide An Valid Format Email ?')
            setLoading(false)
            return
        }
        resetPassword(email)
            .then(() => {
                Swal.fire({
                    title: "Check Your Email to reset Password?",

                    icon: "question"
                });

                setLoading(false)
            })
            .catch(error => {
                // setLoading(false)
                setError(error.message)
                setLoading(false)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">



            <div className="card w-full sm:w-2/3 md:w-1/2 sm:p-10 pb-8 shadow-2xl bg-base-100">

                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handelSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label" htmlFor="logEmail" >
                            <span className="label-text">Email</span>
                        </label>
                        <input id='logEmail' ref={emailRef} type="email" name='email' autoComplete="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='logPass'>
                            <span className="label-text">Password</span>
                        </label>
                        <input id='logPass' type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <p className="label">
                            <a onClick={handelForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </p>
                    </div>
                    {
                        error && <div className="label">
                            <p className='text-red-500 rounded-md font-bold bg-white p-2'>{error}</p>
                        </div>
                    }

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