import React from "react";
import Axios from "axios";

function Register(){

    function register_data() {
        var id_name = document.getElementById("nm").value;
        var id_email = document.getElementById("email").value;
        var id_mob = document.getElementById("number").value;
        var id_psw = document.getElementById("password").value;
		alert(id_psw)

        Axios.post('http://localhost:3565/api/datainsert',
            {dbname:id_name,dbemail:id_email,dbmob:id_mob,dbpsw:id_psw}).then((response)=>{
                if(response.data.message){
                    alert(response.data.message);
                    window.location = "/login"
                }
				else{

					alert('Success');
					window.location = "/login";
				}
            });
    }

    return(
        <>

        	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Register Now</h5>
				
						<div class="form-group">
							<label>Your Name</label>
							<input type="text" class="form-control" name="name" id="nm" placeholder="" required/>
						</div>
						<div class="form-group">
							<label>Email</label>
							<input type="email" class="form-control" name="email" id="email" placeholder="" required/>
						</div>
                        <div class="form-group">
							<label>Mobil Number</label>
							<input type="number" class="form-control" name="number" id="number" placeholder=""
								required/>
						</div>
						<div class="form-group">
							<label class="mb-2">Password</label>
							<input type="password" class="form-control" name="password" id="password" placeholder=""
								required/>
						</div>
					
						<button type="submit" class="btn submit mb-4" onClick={register_data}>Register</button>
						<p class="text-center">
							<a href="#" class="text-da">By clicking Register, I agree to your terms</a>
						</p>
					
				</div>
			</div>
		</div>
	</div>
        </>
    );
}

export default Register;