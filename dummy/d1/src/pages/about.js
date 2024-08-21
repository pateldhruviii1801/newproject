import React from "react";

function About(){
    return(
        <>
        <section class="aboutus">
        <div class="abct">
          <span class="about">ABOUT US</span>     
        </div>

        <div class="details">
          <div class="abim" style={{width:'60%'}}>
            <video src="assests\css\images\pexels-alena-darmel-7722988 (1080p).mp4" loop autoPlay muted style={{cursor:'pointer',borderRadius: '20px'}}></video>
          </div>  
          <div class="abpara">
            <p class="para">
              Welcome to our musical world, where melodies meet emotions, and rhythms resonate with the beat of life. Our journey began with a passion for music that transcends boundaries and speaks to the soul. We are more than just a platform; we are a community of music lovers, artists, and creators united by our love for all things musical. At our core, we believe that music has the power to inspire, heal, and bring people together. It's not just about the notes and lyrics; it's about the stories they tell and the emotions they evoke. Whether you're a seasoned musician, an aspiring artist, or simply someone who enjoys listening to good music, you'll find a home here. Our mission is simple: to provide a platform where musicians can showcase their talent, fans can discover new artists, and everyone can come together to celebrate the universal language of music. From indie bands to classical maestros, from pop sensations to underground gems, we strive to shine a spotlight on diverse voices and genres from around the world.
              So whether you're here to discover your new favorite artist, share your own music with the world, or simply immerse yourself in the beauty of sound, we invite you to join us on this musical journey. Together, let's create, connect, and celebrate the transformative power of music. Welcome to our musical family. Welcome to LIM.            
            </p>
          </div>
        </div>
      </section>

      <section class="team">
        <div class="div1">
          <span class="tmhead">MEET OUR TEAM</span>
          <span class="tmcontent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex quae reprehenderit, omnis molestias hic ratione tempore quisquam rerum explicabo quibusdam necessitatibus dolore laudantium cupiditate? Ut eius omnis voluptate nobis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolore laudantium temporibus id sint animi numquam, in saepe omnis recusandae corporis libero dolor error neque sequi perferendis magni quidem iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto iure, nihil, ducimus cupiditate quaerat atque delectus consequatur illo quasi, blanditiis amet. Quos unde officiis praesentium maiores repudiandae expedita modi?</span>
          <button class="tmbtn">
            <a href="contact.html">GET IN TOUCH</a>
          </button>
        
        </div>
        <div class="div2">
          <div class="img1">
            <img src="assests\css\images\musictm6.jpg" width="100%" height="450px"/>
          </div>
          <div class="img2">
            <img src="assests\css\images\musictm7.jpg" width="100%" height="245px"/>
           <img src="assests\css\images\musictm5.jpg" width="100%" height="245px"/>
          </div>
        </div>
      </section>

    <section class="container11">
    <div class="artsttl">
      <span class="arthead">TOP ARTISTS</span>
    </div>

    <div class="artists">
      <a class="forartstimg" href="arijit.html">
        <div class="artimg">
          <img src="assests\css\images\artst4.png" class="artst" height="300px" backgraound-size="cover"/>
          <div class="artname">
            <span class="anm">Arijit Singh</span>
            <span class="art">Artist</span>
          </div>
        </div>
      </a>    

      <a class="forartstimg" href="drake.html">
      <div class="artimg2">
        <img src="assests\css\images\artist 1.png" class="artst2" height="300px" backgraound-size="cover"/>
        <div class="artname2">
          <span class="anm2">Drake</span>
          <span class="art2">Artist</span>
        </div>
      </div>
    </a>

      <a class="forartstimg" href="taylor.html">
      <div class="artimg3">
        <img src="assests\css\images\artst2.png" class="artst3" height="300px" backgraound-size="cover"/>
        <div class="artname3">
          <span class="anm3">Taylor Swift</span>
          <span class="art3">Artist</span>
        </div>
      </div>
    </a>

      <a class="forartstimg" href="weekend.html">
      <div class="artimg4">
        <img src="assests\css\images\artst3.png" class="artst4" height="300px" backgraound-size="cover"/>
        <div class="artname4">
          <span class="anm4">The Weekend</span>
          <span class="art4">Artist</span>
        </div>
      </div>
    </a> 
    </div>
    </section>

    <section class="container4">
          <div class="sc">
             <h2 class="title1">Let's Start Music</h2>
             <h3 class="title2">What do you want to listen to?</h3>
             <form action="" class="searchbar">
             <input type="text" placeholder="search anything" name="q"/>
             <button type="submit"><img src="assests\css\images\OIP__2_-removebg-preview.png" style={{width: '30px',height:'30px'}}/></button>
             </form>
          </div>
      </section>    
        </>
    );
}

export default About;