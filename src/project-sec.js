import portfoliopic from './imgs/Screenshot (29).png'
import Hostelmanagementpic from './imgs/Screenshot (30).png';
import webtech from './imgs/Screenshot (33).png';

const Projectsec = () => {
    return (
        <div className="project-section flex flex-wrap justify-center items-center m-3 gap-4">
            {/* card-1 */}
         <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-xs"id="Card-project-sec">
            <a href="#!">
                <img
                className="rounded-t-lg"
                src={Hostelmanagementpic}
                alt="" />
            </a>
            <div className="p-6">
                <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Hostel management web-app
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
               Hostel Management Website a personal project born out of a passion for efficient systems and seamless user experiences. This web application is not just about managing beds it's about creating a digital haven for hostel administrators and residents alike.
                </p>
                
            </div>
            </div>

            {/* card-2 */}
         <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-xs"id="Card-project-sec">
            <a href="#!">
                <img
                className="rounded-t-lg"
                src={webtech}
                alt="" />
            </a>
            <div className="p-6">
                <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                WEB-Technology (educational-site)
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Step into the realm of web technology education with my personally crafted website—a virtual classroom designed to empower learners on their journey through the vast world of web development.
                </p>
                
            </div>
            </div>


            {/* card-3 */}
         <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-xs"id="Card-project-sec">
            <a href="#!">
                <img
                className="rounded-t-lg"
                src={portfoliopic}
                alt=""/>
            </a>
            <div className="p-6">
                <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Portfolio template
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Introducing my Portfolio Template—an elegant and functional framework crafted to showcase your skills, experiences, and projects in the digital realm. This template is more than just a collection of web pages; it's your personal canvas to paint a vivid picture of your journey and expertise.
                </p>
            </div>
            </div>
           
         
        </div>
     );
}
 
export default Projectsec;