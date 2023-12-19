import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandTailwind } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
const Card = () => {
    return ( 
        <div id="whole-card" className="flex flex-wrap items-center justify-center gap-4 m-3">
            
                {/* card-1 */}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <FaHtml5 className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">HTMl(Hyper text markup language)</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">I've mastered HTML, the backbone of the web, ensuring semantic, and accessible code. my ability to create intuitive and user-friendly experiences using HTMl</p>
                    
                </div>
                {/* card-1 */}




                {/* card-2 */}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <FaCss3Alt  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">CSS Styling :Elevating Digital Design</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> I bring digital experiences to life through meticulous styling.My portfolio shows a fusion of HTML and CSS and creating stunning and functionally robust websites.</p>
                </div>
                {/* card-2 */}

                {/* card-3 */}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <IoLogoJavascript  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">JavaScript</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">I bring interactivity to the web. Explore my portfolio for a glimpse of dynamic elements that enhance user experiences and animated interfaces</p>
                </div>
                {/* card-3 */}



                {/* card-4*/}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <FaBootstrap  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Bootstrap(Frame-work):</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">In my portfolio, witness the impact of Bootstrap . Experience the synergy of responsive design, mobile-first approaches, and visually polished interfaces.</p>
                </div>
                {/* card-4 */}


                {/* card-5*/}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <TbBrandTailwind  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Tailwind css(Frame-work):</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">In my portfolio, experience the impact of Tailwind CSS—a utility-first framework I skillfully employ for modern and visually appealing web designs.</p>
                </div>
                {/* card-5 */}


                {/* card-6*/}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <FaReact  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">ReactJS Excellence: Dynamic Front-End Crafting</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 ">Explore my portfolio to witness ReactJS in action, driving dynamic  front-end experiences. reusable components and single-page applications</p>
                </div>
                {/* card-6 */}

                {/* card-7*/}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <SiPhp  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">PHP</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 "> PHP takes center stage, seamlessly scripting robust and dynamic back-ends. Witness its prowess in efficient server-side operations, data processing, and database interactions.</p>
                </div>
                {/* card-7 */}

                {/* card-8*/}
                <div className="max-w-xs p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <FaDatabase  className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-3"/>
                    <a href="#">
                        <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Database</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 "> I am an intermediate in the database and data handling.I have used data base in many projects as it is very essential for the data storage and I finished the topics of RDMS and SQL and etc.</p>
                </div>
                {/* card-8 */}



        </div>
     );
}
 
export default Card;