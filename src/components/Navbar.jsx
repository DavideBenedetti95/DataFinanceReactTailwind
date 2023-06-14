import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const navHandlder = () => {
        setNav(!nav)
    }

    return (
        <nav className="flex justify-between items-center px-3 max-w-[1240px] mx-auto h-16">
            
            {/* Desktop Navbar */}
            <h1 className="w-full text-3xl font-bold text-accent">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-3"><a href="#">Home</a></li>
                <li className="p-3"><a href="#analytics">Analytics</a></li>
                <li className="p-3"><a href="#price">Pricing</a></li>
                <li className="p-3"><a href="#contact">Contact</a></li>
            </ul>
            
            {/* Button */}
            <div onClick={navHandlder} className='md:hidden'>
                {nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
            </div>
            
            {/* Mobile Navbar */}
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-accent ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className='pt-14 uppercase'>
                    <li className="p-3 border-b border-background">Home</li>
                    <li className="p-3 border-b border-background">Analytics</li>
                    <li className="p-3 border-b border-background">Pricing</li>
                    <li className="p-3 border-b border-background">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;