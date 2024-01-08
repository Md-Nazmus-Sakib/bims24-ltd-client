import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { user, loading, createUser, signIn, logOut, setLoading } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const email = form.email.value;
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
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setLoading(false)
                navigate('/')
                // updateUserProfile(name, photo)
                //     .then(() => {


                //     })
                // .catch(error => {

                //     setError(error.message)
                // })
            })
            .catch(error => {

                setError(error.message)
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200">



            <div className="card w-full sm:w-2/3 md:w-1/2 p-10 shadow-2xl bg-base-100">

                <h1 className="text-5xl font-bold">Register Now !</h1>
                <form onSubmit={handelRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                    <label className="label">
                        {error && <p className='text-red-500 rounded-md font-bold bg-white p-2'>{error}</p>}
                    </label>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
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