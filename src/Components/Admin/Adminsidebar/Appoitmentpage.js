import React from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'

import Swal from 'sweetalert2';



const Appoitmentpage = () => {
    const navigate = useNavigate();
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    const getApiData = async () => {

        try {
            const res = await axios.get("/api/v1/user/user-appointments");
            setMyData(res.data.data.reverse());

        }
        catch (error) {
            setIsError(error.message);
        }

    };

    useEffect(() => {
        getApiData();

    }, []);

    const deleteOperation = async (_id) =>
	
	
	{ 
		Swal.fire({
			title: 'Are you sure?',
			text: "Delete item into the list!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
			
		  }).then((result) => {
			if (result.isConfirmed) {
				getApiData()
			  Swal.fire(
				'Deleted!',
				'Item has been deleted.',
				'success'
			  )
			}
			

		  }
		  )
		
     try {
				const res = await axios.delete(`/api/v1/user/admin/appointment/` + _id);
				// setMyData(res.data.data);
				
				navigate("/admin/appointment");
				
				console.log(res);
		
			}
			
		catch (error) {
			setIsError(error.message);
		}
		
	
	
		
	}


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
                                                    <th>PatientName</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                          
                                               
                                                    {
                                                        myData.map((post) => {
                                                            const { _id, patientName, age, gender, date, time } = post;
                                                            return (
                                                                <tr key={_id}>
                                                                
                                                                    
                                                                    <td>{patientName}</td>
                                                                    <td>{age}</td>
                                                                    <td>{gender}</td>
                                                                    <td>{date}</td>
                                                                    <td>{time}</td>
                                                                    {/* <td>{data}</td> */}
                                                                    <td class="text-right">
																<div class="actions">
																	<Link to="/admin/appointment" class="btn btn-sm bg-danger-light" >
																		<i class="fe fe-trash"></i><span onClick={()=>deleteOperation(_id)}> Delete
																		</span>
																	</Link>	
																</div>
															</td>
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

export default Appoitmentpage;
