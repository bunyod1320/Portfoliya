import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate ();
  return (
 <div className='Home'>
  <div className='home1'>
    <div className='home'>
<h1 style={{color:"white",fontWeight:"30px"}}>About me </h1>
<hr className='hr1'></hr>
<p>Hi, I'm Bunyod — a passionate software developer who loves turning ideas into clean, functional, and user-friendly digital products. I enjoy solving problems through code and constantly strive to learn new technologies and best practices.

My journey into development started with curiosity about how things work behind the screen, and it has grown into a genuine passion for building efficient, well-structured applications. Whether it's crafting an intuitive user interface or optimizing backend logic, I take pride in writing code that is not just functional, but also maintainable and scalable.

</p>

<button onClick={() => navigate("/Contact")}>Contact</button>
</div>
<img src="https://images.pexels.com/photos/30681586/pexels-photo-30681586.jpeg" className='rasm5'/>

</div>
<h1 style={{color:"white" , textAlign:"center",marginTop:"200px"}}>My skills</h1>
<div className='card-group'>
<div className='card1'>
  <img src='https://nasserzarringhalam.com/wp-content/uploads/2024/08/HTML5.png' />
</div>
<div className='card1'>
  <img src='https://www.globalcloudteam.com/wp-content/uploads/2023/08/CSS.webp' />
</div>
<div className='card1'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' />
</div>
<div className='card1'>
  <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png' />
</div>
<div className='card1'>
  <img src='https://miro.medium.com/1*y6C4nSvy2Woe0m7bWEn4BA.png' />
</div>
<div className='card1'>
  <img src='https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/960px-Bootstrap_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail'/>
</div>



</div>
<h1 style={{color:"white" , textAlign:"center",marginTop:"100px" , padding:"20px"}}>What can I do?</h1>
<div className='card-group' >
<div className='card2'>
<img src='https://www.shutterstock.com/image-vector/speed-icon-vector-fast-symbol-260nw-1424587370.jpg'/>

<div className='title'>
<h1>Speed</h1>
<p>Fast and efficient development without compromising performance</p>
</div>
</div>
<div className='card2'>
<img src='https://img.magnific.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?semt=ais_hybrid&w=740&q=80'/>

<div className='title'>
<h1>Quality</h1>
<p>Clean, well-tested, and reliable code</p>
</div>
</div>
<div className='card2'>
<img src='https://miro.medium.com/0*hfyRwtJOCfd0QTJ8'/>

<div className='title'>
<h1>Design</h1>
<p>Modern, user-friendly, and visually appealing interfaces</p>
</div>
</div>
 </div>
 </div>
 
 
  )


};

export default Home;