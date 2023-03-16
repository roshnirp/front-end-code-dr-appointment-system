import React from 'react'
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const LoginHome = () => {


    // const navigate = useNavigate();
    // //form handler
    // const onfinishHandler = async(values) => {
    //   console.log(values);
    //   console.log(values);
    //   try {
    //     const res = await axios.post("/api/v1/user/admin", values,
    //     {
    //       headers:
    //       {
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //     );
    //     if(res.data.success)
    //     {
    //       message.success('login Successfully!');
    //       navigate('/admin/dashboard');
    //     }
    //     else
    //     {
    //       message.error(res.data.message);
    //     }

    //   }
    //   catch(error) {
    //     console.log(error);
    //     message.error('Something Went Wrong');

    //   }
        
    // };

    const navigate = useNavigate();

    //form handler
    const onfinishHandler = async(values) => {
        console.log(values);
        try {
            const res = await axios.post("/api/v1/user/login",values);
            if(res.data.success){
                localStorage.setItem("token", res.data.token);
                message.success("login Successfully");
                navigate("/admin/doctor_dashboard");
            }
            else
            {
                message.error(res.data.message);
            }
        } 
        catch (error) {
            console.log(error);
            message.error("something went wrong");

        }
    };
    return (
        <div className="account-page">
            {/* Page Content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            {/* Login Tab Content */}
                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img src="/assets/img/login-banner.png" className="img-fluid" alt="Doccure Login" />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        
                                        <Form layout='vertical' onFinish={onfinishHandler}>
                                            <h3>Login Form</h3>
                                           

                                            <Form.Item label="Email" name="email">
                                                <Input type='email' required />
                                            </Form.Item>

                                            <Form.Item label="password" name="password">
                                                <Input type='password' required />
                                            </Form.Item>
                                            <Link to="/register" className="text-right" >Not a user Register here</Link>
                                            <button className='btn btn-primary' type='submit'>Login</button>

                                        </Form>
                                        {/* <form onFinish={onfinishHandler} className="register-form">
                                            <div className="form-group form-focus">
                                                <input type="email" className="form-control floating" />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" className="form-control floating" />
                                                <label className="focus-label">Password</label>
                                            </div>
                                            <div className="text-right">
                                                <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                            </div>
                                            <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                            <div className="login-or p-3">
                                                <span className="or-line mt-4" />
                                                <span className="span-or mt-4">or</span>
                                            </div>
                                            <div className="row form-row social-login">
                                                <div className="col-6">
                                                    <a href="#" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> Login</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="#" className="btn btn-google btn-block"><i className="fab fa-google mr-1" /> Login</a>
                                                </div>
                                            </div>
                                            <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                                        </form> */}
                                    </div>
                                </div>
                            </div>
                            {/* /Login Tab Content */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </div>
    )
}

export default LoginHome
