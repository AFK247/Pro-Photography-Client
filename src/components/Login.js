import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { AuthContext } from './AuthProvider';

//Login Page

const Login = () => {
    const [error, setError] = useState('');
    useTitle("Login");
    

    const { login,setLoading} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { googleLogin } = useContext(AuthContext);

    const google = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(google)
            .then(result => {
                const user = result.user;
                console.log(user);
               
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email, password)
        .then(temp => {
                const user = temp.user;
                console.log(user);
                navigate(from, {replace: true});
                form.reset();
                setError('');
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
            
    }

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Log In with Email and Password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input placeholder='Email' type="email" name="email" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input placeholder='Password' type="password" name="password" className="form-control form-control-lg" />
                                        </div>
                                        <button className="btn btn-outline-warning mb-4 px-4" type="submit">Login</button>
                                        <p className='text-danger text-center'>{error}</p> 
                                        <h4 className="fw-bold my-2 text-uppercase">OR</h4>
                                        <p className="text-white-50 my-4">Log In with Google</p>
                                        <div className='d-flex justify-content-center mb-4'>
                                            <Link onClick={handleGoogle} className="btn btn-outline-info me-4 px-4" to="">Google</Link>
                                        </div>
                                        <p className="small pb-lg-2">Didn't Registered? Go to <Link className="text-white-50" to="/register">Register Page</Link></p>

                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;