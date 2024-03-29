import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const { user, loading, createUser, signIn, logOut, setLoading } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [error, setError] = useState('');
    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name1.value;
        const mobileNo = form.mobileNo.value;
        const email = form.email1.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            return setError('password must be gater than 6 character or longer.')
        }
        else if (!/^(?=.*[A-Z]).*$/.test(password)) {
            return setError('password must be one upper case')
        }
        else if (! /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            return setError('password must be one special Character')
        }

        createUser(email, password)
            .then(result => {
                // const loggedUser = result.user;
                // console.log(loggedUser)
                const userInfo = {
                    name,
                    mobileNo,
                    email,
                    role: 'user'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log('user added to the database')
                            setLoading(false)
                            form.reset();
                            sendEmailVerification(result.user)
                                .then(() => {
                                    Swal.fire({
                                        title: "Check Your Email to Verify?",

                                        icon: "question"
                                    });
                                })
                                .catch(error => {
                                    setLoading(false)
                                    setError(error.message)
                                })
                        }
                        else {
                            setLoading(false)
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200">



            <div className="card w-full sm:w-2/3 md:w-1/2 sm:p-10 pb-8 shadow-2xl bg-base-100">

                <h1 className="text-5xl font-bold">Register Now !</h1>
                <form onSubmit={handelRegister} className="card-body">
                    <div className="form-control">
                        <label className="label" htmlFor='regName'>
                            <span className="label-text">Name</span>
                        </label>
                        <input id='regName' type="text" name='name1' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor='regMobile'>
                            <span className="label-text ">Mobile No</span>
                        </label>
                        <input id='regMobile' type='tel' name='mobileNo' placeholder="01xxxxxxxxx" className="input input-bordered " maxLength="11" pattern="[0-9]{11}" required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='regEmail' >
                            <span className="label-text">Email</span>
                        </label>
                        <input id='regEmail' type="email" name='email1' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='regPass'>
                            <span className="label-text">Password</span>
                        </label>
                        <input id='regPass' type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    {
                        error && <div className="label">
                            <p className='text-red-500 rounded-md font-bold bg-white p-2'>{error}</p>
                        </div>
                    }

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className='card-body py-0'>
                    <Link to={'/login'}> <button className='btn btn-error text-white w-full'>Back to Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Register;