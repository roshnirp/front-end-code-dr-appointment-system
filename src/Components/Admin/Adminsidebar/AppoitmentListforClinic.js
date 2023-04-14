import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

const API = "/api/v1/user/user-appointments";
const AppoitmentListforClinic = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const getApiData = async (url) => {

        try {
            const res = await axios.get(url);
            setMyData(res.data.data.reverse());

        }
        catch (error) {
            setIsError(error.message);
        }

    };

    useEffect(() => {
        getApiData(`${API}`);

    }, []);

  return (
    <div>
       {isError !== "" && <h2>{isError}</h2>}
            <div class="page-wrapper">
                <div class="content container-fluid">

                    {/* <!-- Page Header --> */}
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-7 col-auto">
                                <h3 class="page-title">Appointments</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Appointments</li>
                                </ul>
                            </div>
                            <div class="col-sm-5 col">
                                {/* ------ */}

                                <div class="container">

                                    <Link to="/admin/calinderpage" className='btn btn-info btn-lg'> <span>Book Your Appointment</span></Link>

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- /Page Header --> */}

                    <div class="row">
                        <div class="col-md-12">

                            {/* <!-- Recent Orders --> */}
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="datatable table table-hover table-center mb-0">
                                        <thead>
                                                <tr>
                                                    <th>patientName</th>
                                                    <th>age</th>
                                                    <th>gender</th>
                                                    <th>date</th>
                                                    <th>time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                          
                                               
                                                    {
                                                        myData.map((post) => {
                                                            const { id, patientName, age, gender, date, time } = post;
                                                            return (
                                                                <tr key={id}>
                                                                
                                                                    
                                                                    <td>{patientName}</td>
                                                                    <td>{age}</td>
                                                                    <td>{gender}</td>
                                                                    <td>{date}</td>
                                                                    <td>{time}</td>
                                                                    {/* <td>{data}</td> */}
                                                               
                                                                  </tr>
                                                                  );
                                                        })
                                                    }


                                              

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Recent Orders --> */}

                        </div>
                    </div>


                </div>
            </div>

    </div>
  )
}

export default AppoitmentListforClinic
