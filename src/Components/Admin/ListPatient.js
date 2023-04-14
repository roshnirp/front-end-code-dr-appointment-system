import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const API = "/api/v1/user/book-appointment";
const ListPatient = () => {
	const navigate = useNavigate();
	const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const getApiData = async () => {

        try {
            const res = await axios.get(`/api/v1/user/book-appointment`);
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
				const res = await axios.delete(`/api/v1/user/book-appointment/`+_id);
				// setMyData(res.data.data);
				
				navigate("/admin/Patient_list");
				
				console.log(res);
		
			}
			
		catch (error) {
			setIsError(error.message);
		}
		}

  return (
    <div>
		{isError !== "" && <h2>{isError}</h2>}
      {/* <!-- Page Wrapper --> */}
      <div class="page-wrapper">
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">List of Patient</h3>
								
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Patient Name</th>
													<th>age</th>
													<th>gender</th>
													<th>Time</th>
                                                    <th>Date</th>
													
													<th>Mobile No</th>
													<th>Reasion</th>
													<td>Action</td>
												</tr>
											</thead>
										
											<tbody>
										
											{
                                                        myData.map((post) => {
                                                            const { _id, patientName, age, gender, date, time, mobile_No, reasion} = post;
                                                            return (
                                                                <tr key={_id}>
                                                                
                                                                    
                                                                    <td>{patientName}</td>
                                                                    <td>{age}</td>
                                                                    <td>{gender}</td>
                                                                    <td>{date}</td>
                                                                    <td>{time}</td>
                                                                    <td>{mobile_No}</td>
																	<td>{reasion}</td>
																	

																	<td class="text-right">
																<div class="actions">
																	<Link to="/admin/Patient_list" class="btn btn-sm bg-danger-light" >
																		<i class="fe fe-trash"></i><span onClick={()=>deleteOperation(_id)}> Delete
																		</span>
																	</Link>	
																</div>
															</td>
															<td class="text-right">
																<div class="actions">
																	<a href={`/admin/patient_list/edit/${_id}`} 
																	 class="btn btn-sm bg-primary-light"  >
																		<i class="fa fa-pencil"></i> Edit
																	</a>
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
						</div>			
					</div>
					
				</div>			
			</div>
			{/* <!-- /Page Wrapper --> */}
    </div>
  )
}

export default ListPatient
