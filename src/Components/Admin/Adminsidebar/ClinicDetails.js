import React from 'react'
import { Col, Form, Input, Row, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const ClinicDetails = () => {

        const navigate = useNavigate();

        //handle form
        const handleFinish = async (values) => {
                console.log(values);

                try {
                        const res = await axios.post("/api/v1/user/clinic", values);
                        if (res.data.success) {
                                message.success("clinic successfully");
                                navigate("/admin/clinic_list");
                        }
                        else {
                                message.error(res.data.message);
                        }
                } catch (error) {
                        console.log(error);
                        message.error("something went wrong");
                }
        };
        return (
                <div>
                        <div class="page-wrapper">
                                <div class="content container-fluid">

                                        {/* <!-- Page Header --> */}
                                        <div class="page-header">
                                                <div class="row">
                                                        <div class="col-sm-12">
                                                                <h3 class="page-title">Clinic Details</h3>
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
                                                                                                        label="clinic_password"
                                                                                                        name="clinic_password"
                                                                                                        required
                                                                                                        rules={[{ required: true }]}>
                                                                                                        <Input type='text' placeholder='clinic password' />
                                                                                                </Form.Item>
                                                                                        </Col>
                                                                                        <Col xs={24} md={24} lg={8}>
                                                                                                <Form.Item
                                                                                                        label="Clinic Name"
                                                                                                        name="clinicName"
                                                                                                        required
                                                                                                        rules={[{ required: true }]}>
                                                                                                        <Input type='text' placeholder='company name' />
                                                                                                </Form.Item>
                                                                                        </Col>

                                                                                        <Col xs={24} md={24} lg={8}>
                                                                                                <Form.Item
                                                                                                        label="Email"
                                                                                                        name="email"
                                                                                                        required
                                                                                                        rules={[{ required: true }]}>
                                                                                                        <Input type='text' placeholder='email' />
                                                                                                </Form.Item>
                                                                                        </Col>
                                                                                        <Col xs={24} md={24} lg={8}>
                                                                                                <Form.Item
                                                                                                        label="Website"
                                                                                                        name="website"
                                                                                                        required
                                                                                                        rules={[{ required: true }]}>
                                                                                                        <Input type='text' placeholder='website' />
                                                                                                </Form.Item>

                                                                                        </Col>
                                                                                        <Col xs={24} md={24} lg={8}>
                                                                                                <Form.Item
                                                                                                        label="Address"
                                                                                                        name="address"
                                                                                                        required
                                                                                                        rules={[{ required: true }]}>
                                                                                                        <Input type='text' placeholder='address' />

                                                                                                </Form.Item>
                                                                                        </Col>

                                                                                        <Col xs={24} md={24} lg={8}>
                                                                                                <Form.Item
                                                                                                        label="Mobile Number"
                                                                                                        name="mobileNo"
                                                                                                        required
                                                                                                        rules={[{ required: true }]}>
                                                                                                        <Input type='number' placeholder='mobile number' />
                                                                                                </Form.Item>
                                                                                        </Col>
                                                                                        {/* <Col xs={24} md={24} lg={8}>
                                                <Form.Item 
                                                label="Timings" 
                                                name="timings" 
                                                required 
                                                rules={[{required:true}]}>
                                                <TimePicker.RangePicker/>
                                                </Form.Item>

                                            </Col> */}                                           <Col xs={24} md={24} lg={8}>
                                                                                                <Form.Item>
                                                                                                        <div className='d-flex justify-content-end'>
                                                                                                        <button className='btn btn-primary'>Submit</button>
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

export default ClinicDetails
