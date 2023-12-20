
import './App.css';
import Navbar from './Nav';
import * as React from 'react';
import Card from './Card';
import Projectsec from './project-sec';

// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
function App() {
  return (
    <div className="App" id="whole">
      <div className="whole">
        <div id="back">
          {/* <img src={logo} alt="Logo" />  */}
        </div>
        <Navbar />
        <div id="front">
        <div id="sec-1" className='bg-gray-800 flex flex-wrap md:justify-around items-center '>
        <div id="image-sec" className='max-w-xl p-1 bg-black rounded-sm '>
            <img src="https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?w=740&t=st=1702488065~exp=1702488665~hmac=56def85df8ec93faf09e9a9c8a934061a9483af74e359fd6793c81c0ec26d875" alt="" />
          </div>
          <div className="content max-w-xl leading-10">
            <h className="text-slate-200 sm:text-6xl">Hi, i am</h> <br />
            <h className=" text-gray-800 sm:text-6xl font-semibold" id="Name">M.Deepak</h> <br />
            <h className="text-slate-300 sm:text-6xl">Full stack developer</h>
          </div>
          </div>
        
        <div id="heading-sec-2"className='bg-gray-800   flex flex-wrap md:justify-around items-center sm:justify-center'>
        <h className="text-slate-300 sm:text-4xl" id="">About Me</h>
        </div>
        <div id="sec-2"className='bg-gray-800   flex flex-wrap md:justify-around items-center sm:justify-center'>
         <div id="image-sec" className='max-w-sm p-2 bg-white rounded-sm'>
          <img src="https://img.freepik.com/free-vector/hand-drawn-traveling-boy-waving_52683-13273.jpg?t=st=1702453049~exp=1702453649~hmac=3f013dde9f2d56d3127513eb279662c7a13354926e70f9cb2441a81ea7de841e" alt="" />
         </div>
         <div id="content-sec" className='max-w-lg p-2'>
          <p className='text-white md:text-4xl truncate'> I'm <b id="Name" className='text-gray-800'> Deepak</b> </p>
          <p className='text-white md:text-2xl truncate'> I'm an <b id="Name" className='text-gray-800'> Full stack  developer</b> </p>
          <p className='text-white md:text-2xl truncate'>and<b id="Name" className='text-gray-800 m-1'> Figma designer</b>and <b id="Name" className='text-gray-800'> Photo Editor</b></p>
          <p className='text-white md:text-xl'>I am Diploma student. I am studing my Diploma in SVREC collage which is located in the Nandyal.</p>
          <p className='text-white md:text-xl truncate'>My Skills:</p>
          <p className='text-white md:text-xl truncate'>1.Front-end developer</p>
          <p className='text-white md:text-xl truncate'>2.Backend coding</p>
          <p className='text-white md:text-xl truncate'>3.DBA(Database administrator) </p>
          <p className='text-white md:text-xl truncate'>4.Figma handling</p>  
          <p className='text-white md:text-xl truncate'>4.Advanced front-end using frame works</p>
         </div>
        </div>
        <div id="heading-sec-2"className=' bg-gray-800 flex flex-wrap md:justify-around items-center justify-center'>
        <h className="text-teal-500 text-4xl" id="">Languages learned</h>
        </div>
         <div id="sec-3" className='bg-gray-800  flex flex-wrap md:justify-around items-center justify-center'>
          <div id="content-sec-3" className='block w-100'>
           <h1 className='text-2xl text-white font-semibold'>Programming language I learned and mastered</h1> 
          </div>
          <div id="Cards" className='w-full'>
            <Card/>
          </div>
         </div>
         <div id="sec-4" className='bg-gray-800  flex flex-wrap md:justify-around items-center justify-center'>
         <div id="content-sec-3" className='block w-100'>
           <h1 className='text-3xl text-white font-semibold'>My Projects</h1> 
          </div>
          <div id="card-sec" className='w-full'>
            <Projectsec/>
          </div>
         </div>
         {/* whole content ending */}
         
         {/* footer */}
        <div id="footer-sec">
              
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                        Find me on any of these platforms
                        </h5>
                        <div class="mt-6 lg:mb-0 mb-6">
                        <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                            <i class="fab fa-github"></i>
                        </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                            <ul class="list-unstyled">
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                            </li>
                            <li>
                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Munakaladeepak">Github</a>
                            </li>
                            <li>
                                <div class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact:9652462235</div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;