import React from 'react'
import { Form, Input, message } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SuperAdminlogin = () => {
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {

    console.log(values);
    try {
      const res = await axios.post("/api/v1/user/admin", values,
      {
        headers:
        {
          'Content-Type': 'application/json',
        },
      }
      );
      if(res.data.success)
      {
        message.success('login Successfully!');
        navigate('/admin/dashboard');
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
    <div>
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
                                            <h3>SuperAdmin Login Form</h3>
                                           

                                            <Form.Item label="Email" name="email">
                                                <Input type='email' required />
                                            </Form.Item>

                                            <Form.Item label="password" name="password">
                                                <Input type='password' required />
                                            </Form.Item>
                                          
                                            <button className='btn btn-primary' type='submit'>Login</button>

                                        </Form>

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
      
    </div>
  )
}

export default SuperAdminlogin
