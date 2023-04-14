import React from 'react'
import { Col, Form, Input, Row, message } from 'antd';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AddAppointment = () => {

    // const navigate = useNavigate();

    //handle form
    const handleFinish = async (values) => {
        console.log(values);

        try {
            const res = await axios.post("/api/v1/user/book-appointment", values);
            if (res.data.success) {
                message.success("add data into list successfully");
                // navigate("/admin/appointment");
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
                                <h3 class="page-title">Add Appoinment Details</h3>
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
                                                    label="PatientId"
                                                    name="patientId"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='patientid' />
                                                </Form.Item>
                                            </Col>
                                           
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Name"
                                                    name="patientName"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='patientName' />
                                                </Form.Item>
                                            </Col>


                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Age"
                                                    name="age"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='age' />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Gender"
                                                    name="gender"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='gender' />
                                                </Form.Item>

                                            </Col>


                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Mobile No."
                                                    name="mobile_No"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='mobile No' />
                                                </Form.Item>

                                            </Col>
                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Time"
                                                    name="time"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='text' placeholder='time' />

                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} md={24} lg={8}>
                                                <Form.Item
                                                    label="Date"
                                                    name="date"
                                                    required
                                                    rules={[{ required: true }]}>
                                                    <Input type='date' placeholder='mobile number' />
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

export default AddAppointment
