import { MaterialTailwindTheme } from "@material-tailwind/react";
const Navbar = () => {
    return ( 
        <div className="navbar " id="navbar">
                <div className="flex flex-wrap">
                <section className="relative mx-auto">
                    
                    <nav className="flex justify-between bg-gray-900 text-white w-screen">
                    <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                        <a className="text-3xl font-bold font-heading" href="#">
                        {/* <img className="h-9" src="logo.png" alt="logo">  */}
                        Portfolio
                        </a>
                        
                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a className="hover:text-gray-200" href="#">Home</a></li>
                        <li><a className="hover:text-gray-200" href="#">Skill</a></li>
                        <li><a className="hover:text-gray-200" href="#">About</a></li>
                        <li><a className="hover:text-gray-200" href="#">Contact</a></li>
                        </ul>
                        
                       
                    </div>
                    
                   
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                    </nav>
                    
                </section>
                </div>

                <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        
                    </div>
</div>





        </div>
     );
}
 
export default Navbar;