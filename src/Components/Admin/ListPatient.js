import React from 'react'

const ListPatient = () => {
  return (
    <div>
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
												</tr>
											</thead>
										
											<tbody>
										
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Patient1</a>
														</h2>
													</td>
													<td>28</td>
													
													<td>male</td>
													
													<td>10am-12pm</td>
                                                    <td>03/01/2023</td>
													
													{/* <td>
														<div class="status-toggle">
															<input type="checkbox" id="status_1" class="check" checked/>
															<label for="status_1" class="checktoggle">checkbox</label>
														</div>
													</td> */}
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Patient2 </a>
														</h2>
													</td>
													<td>28</td>
													
													<td>male</td>
													
													<td>12pm-02pm</td>
                                                    <td>05/01/2023</td>
													
													{/* <td>
														<div class="status-toggle">
															<input type="checkbox" id="status_1" class="check" checked/>
															<label for="status_1" class="checktoggle">checkbox</label>
														</div>
													</td> */}
												</tr>
											
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
