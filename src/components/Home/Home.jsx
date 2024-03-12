import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
    
    return(
        <div id="homeDiv">
            
{/* <h1>Welcome To My Page!</h1> */}
<h1 id="titleContainer">
  <span id="titleWhere">Where </span>
  <span id="titleYour"> Your </span>
  <span id="titleFitness"> Fitness </span>
  <span id="titleJourney">Journey</span>
  <span id="titleBegins"> Begins</span>
 <img  id="headerPic" src="https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
 <img  id="stephPic" src="https://images.msha.ke/6151e0a1-0dbe-47b6-bcee-3cae49ce50e5?auto=format%2Ccompress&cs=tinysrgb&q=30&w=828"/>
  </h1>
{/* <img   src="https://images.unsplash.com/photo-1557330359-ffb0deed6163?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
{/* <img src="https://images.unsplash.com/photo-1592494624782-b5bee232f156?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
{/* <img src="https://images.unsplash.com/photo-1589579234091-4b2ffe39b26f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}

<h2 id="introH2"> My Mission: </h2>
<p id="introP">
    Hi,<br/> 
  I’m Stephanie Andrade - you’re certified personal trainer that is excited to embark this fitness journey with you! Starting a fitness journey can be imitating, but that’s where I come in to best guide & support you in achieving your fitness & health goals. 
<br/>
Since 2021 of starting my own fitness journey, I’ve discovered a deeper understanding of health & fitness going beyond just physical changes. I’ve also learned the importance of self-acceptance, confidence building and overcoming mental obstacles.
<br/>
As a personal trainer, I want to help you make sustainable lifestyle changes to improve your overall wellbeing.
</p>
{/* <img src=""/> */}
{/* <img src=""/> */}
</div>
    );
}

export default Home;