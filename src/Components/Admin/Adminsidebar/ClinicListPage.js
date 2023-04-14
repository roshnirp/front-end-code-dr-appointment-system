import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ClinicListPage = () => {
	const navigate = useNavigate();
	
	const [myData, setMyData] = useState([]);
	const [isError, setIsError] = useState("");
	


	const getApiData = async () => {

		try {
			const res = await axios.get("/api/v1/user/clinic");
			setMyData(res.data.data.reverse());
			// console.log(res.data);

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
				const res = await axios.delete(`/api/v1/user/clinic/`+_id);
				// setMyData(res.data.data);
				
				navigate("/admin/clinic_list/:id");
				
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
								<h3 class="page-title">List of Clinic</h3>

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
													{/* <th>id</th> */}
													<th>Clinic Name</th>
													<th>Email</th>
													<th>Website</th>
													<th>Mobile Number</th>
													<th>Address</th>
													<th class="text-right">Actions</th>
												</tr>
											</thead>
											{
												myData.map((post) => {
													const { _id, clinicName, mobileNo, email, website, address } = post;
													return (
														<tr key={_id}>
															{/* <td>{_id}</td> */}
															<td>{clinicName}</td>

															<td>{email}</td>
															<td>{website}</td>
															<td>{mobileNo}</td>
															<td>{address}</td>
															<td class="text-right">
																<div class="actions">
																	<Link to="/admin/clinic_list/:id" class="btn btn-sm bg-danger-light" >
																		<i class="fe fe-trash"></i><span onClick={()=>deleteOperation(_id)}> Delete
																		</span>
																	</Link>	
																</div>
															</td>
															<td class="text-right">
																<div class="actions">
																	<a href={`/admin/clinic_list/edit/${_id}`} 
																	 class="btn btn-sm bg-primary-light"  >
																		<i class="fa fa-pencil"></i> Edit
																	</a>
																</div>
															</td>


														</tr>);


												})
											}


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

export default ClinicListPage




