import React from 'react'

const Lockscreen = () => {
  return (
    <div>
        {/* <!-- Main Wrapper --> */}
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
            	<div class="container">
                	<div class="loginbox">
                    	<div class="login-left">
							<img class="img-fluid" src="/adminassets/img/logo.png" alt="Logo"/>
                        </div>
                        <div class="login-right">
							<div class="login-right-wrap">
								<div class="lock-user">
									<img class="rounded-circle" src="/adminassets/img/profiles/avatar-02.jpg" alt="User Image"/>
									<h4>John Doe</h4>
								</div>
								
								{/* <!-- Form --> */}
								<form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
									<div class="form-group">
										<input class="form-control" type="text" placeholder="Password"/>
									</div>
									<div class="form-group mb-0">
										<button class="btn btn-primary btn-block" type="submit">Enter</button>
									</div>
								</form>
								{/* <!-- /Form --> */}
								
								<div class="text-center dont-have">Sign in as a different user? <a href="/admin/login">Login</a></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{/* <!-- /Main Wrapper --> */}
      
    </div>
  )
}

export default Lockscreen
