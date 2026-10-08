import { Link } from "react-router-dom";
import React from "react";
import logo from '../assets/Images/Logos/1.jpg'
export default function Navbar() {
const [open, setOpen] = React.useState(false)

return (
<header className="bg-black  w-full h-30 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center mt-5 justify-between h-20">

<div className="shrink-0">
<Link to="/" className="flex items-center gap-3">
<div className="w-25 rounded-b-full overflow-hidden ml-10  ">
<img src={logo} alt="Nostalgic Photography logo" className="w-full h-full object-cover" />
</div>

</Link>
</div>

  <nav className="hidden md:flex  space-x-6 items-center ">
<NavLink to="/"><span  style={{fontSize:'22px',fontFamily:'Georgia',}}>Home</span></NavLink>
<NavLink to="/services"><span  style={{fontSize:'22px',fontFamily:'Georgia'}}>Services</span></NavLink>
<NavLink to="/portfolio"><span  style={{fontSize:'22px',fontFamily:'Georgia'}}>Portfolio</span></NavLink>
<NavLink to="/about"><span  style={{fontSize:'22px',fontFamily:'Georgia'}}>About</span></NavLink>
<NavLink to="/contact"><span  style={{fontSize:'22px',fontFamily:'Georgia'}}>Contact</span></NavLink>
</nav>

<div className="flex items-center gap-3">
<Link to="/contact" className="hidden md:inline-block px-4 py-2 bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-medium rounded-md shadow">Book Now</Link>


<button
onClick={() => setOpen(!open)}
aria-expanded={open}
aria-label="Toggle menu"
className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
>
<svg className={`mb-2  h-8 w-8 transform ${open ? 'rotate-90' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
{open ? (
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
) : (
<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
)}
</svg>
</button>
</div>
</div>
</div>



<div className={`md:hidden bg-black/90 backdrop-blur-sm fixed top-16 left-0 right-0 transform origin-top transition-all ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
<div className="px-4 pt-4 pb-6 space-y-3">
<MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
<MobileLink to="/services" onClick={() => setOpen(false)}>Services</MobileLink>
<MobileLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</MobileLink>
<MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
<MobileLink to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-block w-full text-center bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-medium py-2 rounded-md">Book Now</MobileLink>
</div>
</div>
</header>
)
}


function NavLink({ to, children }) {
return (
<Link to={to} className="text-white/90 hover:text-amber-400  px-2 py-1 rounded-md text-sm font-medium">{children}</Link>
)
}


function MobileLink({ to, children, onClick, className = '' }) {
return (
<Link to={to} onClick={onClick} className={`block text-white/95 py-2 px-3 rounded-md text-base font-medium ${className}`}>{children}</Link>
)
}
