import React from 'react';
import axios from 'axios';
import  { useEffect } from 'react';
import { useState } from 'react';



const Docterlistpage = () => {
	const [myData, setMyData] = useState([]);
	const [isError, setIsError]= useState("");

	const getApiData = async () => {

		try {
			const res = await axios.get("/api/v1/user/apply-doctor");
			setMyData(res.data.data);
			// console.log(res.data.data);

		}
		catch (error) {
			setIsError(error.message);
		}

	};

	useEffect(() => {
		getApiData();

	}, []);

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
										
											<tbody>
										
											
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
												</tr>
											</thead>
											<tr>
													{
														myData.map((post) => {
															const {  doctorName,specialization, email, website, address,feesPerCunsaltation,phoneNo,experience } = post;
															return (
																<div key={email}>
																	<td>{doctorName}</td>
																	<td>{specialization}</td>
																	<td>{email}</td>
																	<td>{website}</td>
																	<td>{address}</td>
																	<td>{feesPerCunsaltation}</td>
																	<td>{phoneNo}</td>
																	<td>{experience}</td>
																</div>
																);
														})
													}


												</tr>
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


            

