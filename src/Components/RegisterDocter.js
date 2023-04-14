import React from 'react'
import {Form, Input, message} from 'antd';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const RegisterDocter = () => {
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
              <Link to="/login/doctor" className="text-right" >Already have an account?</Link>
            <button className='btn btn-primary' type='submit'>Register</button>

           </Form>

       
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

export default RegisterDocter
