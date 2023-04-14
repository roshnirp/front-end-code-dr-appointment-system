import React from 'react'
import { Col, Form, Input, Row, message } from 'antd';
import { useNavigate,useParams } from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from 'react';

const EditPatientList = () => {
    const {_id} = useParams();
    const [myData, setMyData] = useState([]);
    

    const navigate = useNavigate();
    useEffect(()=>{
        loadUser();
     },[]);

    //handle form
    const handleFinish = async () => {
        // console.log(values);

        try {
            const res = await axios.put(`/api/v1/user/book-appointment/${_id}`, myData);
            if (res.data.success) {
                console.log(res.data);
                message.success("successfully");
                navigate("/admin/Patient_list");
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
            const res = await axios.get(`/api/v1/user/book-appointment/${_id}`);
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
                                <h3 class="page-title">Patient Details</h3>
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
                                                    label="Patient Name"
                                                    // name="patientName"
                                                  >
                                                    <Input type='text' name="patientName" value={myData.patientName} placeholder='patientname'   onChange={e => setMyData({...myData, patientName:e.target.value})} />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Age"
                                                    // name="age"
                                                   >
                                                    <Input type='text' placeholder='age'  name="age" value={myData.age} onChange={e => setMyData({...myData, age:e.target.value})}/>
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Gender"
                                                    // name="gender"
                                                  >
                                                    <Input type='text' placeholder='gender' name="gender" value={myData.gender} onChange={e => setMyData({...myData, gender:e.target.value})}/>
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Time"
                                                    // name="time"
                                                 >
                                                    <Input type='text' name="time" placeholder='time' value={myData.time} onChange={e => setMyData({...myData, time:e.target.value})} />
                                                </Form.Item>

                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Date"
                                                    // name="date"
                                                 >
                                                    <Input type='date' name='date' value={myData.date} placeholder='date' onChange={e => setMyData({...myData, date:e.target.value})} />

                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Mobile Number"
                                                    // name="mobile_No"
                                                >
                                                    <Input type='number' name="mobile_No" value={myData.mobile_No} placeholder='mobile number' onChange={e => setMyData({...myData, mobile_No:e.target.value})} />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Reasion"
                                                    // name="reasion"
                                                >
                                                    <Input type='text' name="reasion" value={myData.reasion} placeholder='reasion' onChange={e => setMyData({...myData, reasion:e.target.value})} />
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

export default EditPatientList;
