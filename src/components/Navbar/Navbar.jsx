import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open )}>
            {
             open === true ? 
             <AiOutlineClose></AiOutlineClose> 
             : <AiOutlineMenu className=""></AiOutlineMenu>
            }
            </div>
      <ul className={`md:flex duration-1000 absolute md:static
      ${open ? 'top-1 6' : '-top-60'}
      bg-yellow-200 px-6 
      `}>
        {
            routes.map((route) => <Link key={route.id} route={route}></Link>
          
        )
    }
      </ul>
    </nav>
  );
};

export default Navbar;
