import React from 'react';
import {Form, Input, message} from 'antd';

import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const RegisterHome = () => {
  const navigate = useNavigate();
    //form handler
    const onfinishHandler = async (values) => {

      console.log(values);
      try {
        const res = await axios.post("/api/v1/user/register", values,
        {
          headers:
          {
            'Content-Type': 'application/json'
          }
        }
        );
        if(res.data.success)
        {
          message.success('Resgister Successfully!');
          navigate('/login');
        }
        else
        {
          message.error(res.data.message);
        }

      }
      catch(error) {
        console.log(error);
        message.error('Something Went Wrong');

      }
        
    };
  return (
    <div className="account-page">

        {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Register" />	
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Patient Register <a href="doctor-register.html">Are you a Doctor?</a></h3>
                    </div>
                    {/* Register Form */}
                    <Form layout='vertical' onFinish={onfinishHandler} className="register-form">
                      <h3>Register Form</h3>
                      <Form.Item label="Name" name="name">
                        <Input type='text' required/>
                      </Form.Item>   

                      <Form.Item label="Email" name="email">
                        <Input type='email' required/>
                      </Form.Item> 

                      <Form.Item label="Password" name="password">
                        <Input type='password' required/>
                      </Form.Item> 
                      <Link to="/login" className="text-right" >Already have an account?</Link>
                    <button className='btn btn-primary' type='submit'>Register</button>

                   </Form>

                    {/* <form onFinish={onfinishHandler}>
                      <div className="form-group form-focus"  name='name'>
                        <input type="text" className="form-control floating" />
                        <label className="focus-label" name='name' >Name</label>
                      </div>
                      <div className="form-group form-focus" name="email">
                        <input type="email" className="form-control floating"  />
                        <label className="focus-label" name="email" >Email</label>
                      </div>
                      <div className="form-group form-focus" name='password'>
                        <input type="password" className="form-control floating" />
                        <label className="focus-label" name='password'>Create Password</label>
                      </div>
                      <div className="text-right">
                        <a  href="/login">Already have an account?</a>
                      </div>
                      <button className="btn btn-primary btn-block btn-lg " type="submit">Signup</button>
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
                    </form> */}
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>		
      {/* /Page Content */}

      
    </div>
  )
}

export default RegisterHome
