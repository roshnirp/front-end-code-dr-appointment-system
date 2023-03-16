import React from 'react'
import { Col, Form, Input, Row, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const AddDoctor = () => {
    const navigate = useNavigate();

    //handle form
    const handleFinish = async (values) => {
        console.log(values);

        try {
            const res = await axios.post("/api/v1/user/apply-doctor", values);
            if (res.data.success) {
                message.success("apply successfully");
                navigate("/admin/list_doctors");
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
                                <h3 class="page-title">Doctor Details</h3>
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
                                                    label="Doctor Name"
                                                    name="doctorName"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='clinic password' />
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
                                                    name="phoneNo"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='number' placeholder='mobile number' />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                            <Form.Item 
                                            label="Specialization" 
                                            name="specialization" 
                                            required 
                                            rules={[{required:true}]}>
                                            <Input type='text' placeholder='specialization' />
                                            </Form.Item>

                                        </Col>
                                        <Col xs={24} md={24} lg={8}>
                                            <Form.Item 
                                            label="FeesPerCunsaltation" 
                                            name="feesPerCunsaltation" 
                                            required 
                                            rules={[{required:true}]}>
                                            <Input type='number' placeholder='feesPerCunsaltation' />
                                            </Form.Item>

                                        </Col>

                                        <Col xs={24} md={24} lg={8}>
                                            <Form.Item 
                                            label="Experience" 
                                            name="experience" 
                                            required 
                                            rules={[{required:true}]}>
                                            <Input type='text' placeholder='experience' />
                                            </Form.Item>

                                        </Col>

                                        <Col>
                                        <Form.Item >
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

export default AddDoctor
