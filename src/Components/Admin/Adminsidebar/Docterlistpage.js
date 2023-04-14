
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Docterlistpage = () => {
	const [myData, setMyData] = useState([]);
	const [isError, setIsError]= useState("");

	const getApiData = async () => {

		try {
			const res = await axios.get("/api/v1/user/apply-doctor");
		
			setMyData(res.data.data.reverse());
			// console.log(res.data.data);

		}
		catch (error) {
			setIsError(error.message);
		}

	};

	useEffect(() => {
		getApiData();

	}, []);

	
	const deleteData = async (_id) =>
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
			const res = await axios.delete(`/api/v1/user/apply-doctor/`+ _id);
			// setMyData(res.data.data);
			// navigate("/admin/clinic_list/:_id");

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
								<h3 class="page-title">List of Doctors</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
									<li class="breadcrumb-item active">Doctor</li>
								</ul>
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
													<th>Doctor Name</th>
													<th>Speciality</th>
													<th>Email</th>
													<th>Website</th>
													<th>Address</th>
													<th>FeesPerCunsaltation</th>
													<th>Mobile Number</th>
													<th>Experience</th>
													<th>Action</th>
												</tr>
											</thead>
											
											
											<tbody>
										
											
											
											
													{
														myData.map((post) => {
															const {  _id,doctorName,specialization, email, website, address,feesPerCunsaltation,phoneNo,experience } = post;
															return (
																<tr  key={email}>
																
																	<td>{doctorName}</td>
																	<td>{specialization}</td>
																	<td>{email}</td>
																	<td>{website}</td>
																	<td>{address}</td>
																	<td>{feesPerCunsaltation}</td>
																	<td>{phoneNo}</td>
																	<td>{experience}</td>
																	<td class="text-right">
																<div class="actions">
																	<button class="btn btn-sm bg-danger-light"  href="#delete_modal">
																		<i class="fe fe-trash"></i><span onClick={()=>deleteData(_id)}> Delete
																		</span></button>
																</div>
															</td>
															<td class="text-right">
																<div class="actions">
																	<a href={`/admin/doctor_list/edit/${_id}`} class="btn btn-sm bg-primary-light"  >
																		<i class="fa fa-pencil"></i> Edit
																	</a>
																</div>
															</td>

																</tr>
																);
														})
													}


												
												{/* <tr>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Dr. Ruby Perrin</a>
														</h2>
													</td>
													<td>Dental</td>
													
													<td>perrin@gmail.com</td>
													
													<td>www.dental.com</td>
													
													<td>
														detntal address
													</td>
													<td>500Rs</td>
													<td>895641325</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Dr. Darren Elder</a>
														</h2>
													</td>
													<td>Dental</td>
													
													<td>Elder@gmail.com</td>
													
													<td>www.Drren.com</td>
													
													<td>
														detntal address
													</td>
													<td>500Rs</td>
													<td>895641325</td>
												</tr> */}

						
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

export default Docterlistpage


            

