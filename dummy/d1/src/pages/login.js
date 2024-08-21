import React from "react";
import Axios from "axios";

function Login(){

  var submit_data=()=>{
	var eml=document.getElementById('email').value;
	var psw=document.getElementById('psw').value;
	alert(psw);

	Axios.post('http://localhost:3565/myapi/insert',
		{email:eml,pass:psw}).then((response)=>{
			if(response.data.message)
			{
				alert(response.data.message);
				// alert('wrong email id and password!');
				window.location = "/login"
			}
			else{
				console.log(response);
				alert('Login sucessful!');
				window.location = "/"
			}
		});
  }

    return(
        <>
        <div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Login Now</h5>
					<form onSubmit={submit_data}>
						<div class="form-group">
							<label>Your Email</label>
							<input type="email" class="form-control"  id="email" placeholder="" required/>
						</div>
						<div class="form-group">
							<label class="mb-2">Password</label>
							<input type="password" class="form-control"  id="psw" placeholder="" required/>
						</div>
                        <input type="submit" value="Login" class="btn submit mb-4"/>
						
                        </form>
						<p class="forgot-w3ls text-center mb-3">
							<a href="#" class="text-da">Forgot your password?</a>
						</p>
						<p class="account-w3ls text-center text-da">
							Don't have an account?
							<a href="/register" class="register">Create one now</a>
						</p>
					
				</div>
			</div>
		</div>
	</div>
        </>
    );
}

export default Login;
