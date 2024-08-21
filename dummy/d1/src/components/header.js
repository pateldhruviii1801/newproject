import React from "react";

function Header(){
    return(
        <>
         <header class="header">
    <nav>
      <label class="logo-child">
        <img src="assests\css\images\wave-removebg-preview.png" alt="pic" class="lg" />
      </label>

      <div class="burger-menu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
      <ul class="nav">
        <li><a href="/">Home</a></li>
        <li><a href="/music">Music & vids</a></li>
        <li><a href="/blog">Blogs</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <div class="col-lg-5 col-4 top-w3layouts p-md-0 text-right">
								<a href="/login" class="btn login-button-2 text-uppercase text-wh">
									<span class="fa fa-sign-in mr-2"></span>Login</a>
				</div>
      </ul>
    </nav>
  </header>

        </>
    );
}

export default Header;