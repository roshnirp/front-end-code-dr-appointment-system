import React, {useEffect} from 'react';
import { Col, Form, Input, Row, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const EditeListItem = () => {
    const {_id} = useParams();
    const [myData, setMyData] = useState([]);
    
const navigate = useNavigate();
 useEffect(()=>{
    loadUser();
 },[]);

        //handle form
        const handleFinish = async () => {
           
                // console.log(myData);
            
                
                try {
                        const res = await axios.put(`/api/v1/user/clinic/${_id}`, myData);
                        if (res.data.success) {
                            console.log(res.data);
                                message.success("update data successfully");
                                navigate("/admin/clinic_list/:_id");
                        }
                        else {
                                message.error(res.data.message);
                        }
                }
                catch (error) {
                        console.log(error);
                        message.error("something went wrong");
                }
        };

        const loadUser = async () => {

            try {
                const res = await axios.get(`/api/v1/user/clinic/` + _id);
                setMyData(res.data.data);
                console.log(res.data.data);
    
            }
            catch (error) {
                console.log(error.message);
            }
            
        }
    
    return (
        <div>
            <div class="page-wrapper">
                <div class="content container-fluid">

                    {/* <!-- Page Header --> */}
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3 class="page-title">Edit Clinic Details</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Page Header --> */}

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <Form layout='vertical' onFinish={handleFinish}>
                                 
                                        <Row gutter={20}>

                              

                                         <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Clinic Name"
                                                    // name="clinicName"
                                                  >
                                                  
                                                    <Input type='text' name="clinicName" value={myData.clinicName} placeholder='company name' onChange={e => setMyData({...myData, clinicName: e.target.value})} />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Email"
                                                    // name="email"
                                                    >
                                                    <Input type='text'   name="email" value={myData.email} placeholder='email' onChange={e => setMyData({...myData, email: e.target.value})} />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Website"
                                                    // name="website"
                                                   >
                                                    <Input type='text'   name="website" value={myData.website} placeholder='website' onChange={e => setMyData({...myData, website:e.target.value})} />
                                                </Form.Item>

                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Address"
                                                    // name="address"
                                                    
                                                 
                                                   >
                                                    <Input type='text' name="address" value={myData.address} placeholder='address' onChange={e => setMyData({...myData, address:e.target.value})}/>

                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Mobile Number"
                                                    // name="mobileNo"
                                                    
                                                 
                                                   >
                                                    <Input type='number'  name="mobileNo" value={myData.mobileNo} placeholder='mobile number' onChange={e => setMyData({...myData, mobileNo:e.target.value})} />
                                                </Form.Item>
                                            </Col>
                                             <Col xs={24} md={24} lg={8}>
                                                <Form.Item>
                                                    <div className='d-flex justify-content-end'>
                                                        <button className='btn btn-primary'>Update Data</button>
                                                    </div>
                                                </Form.Item>
                                            </Col>





                                        </Row>
                                    </Form>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditeListItem
