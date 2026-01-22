import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex gap-7 items-center justify-between bg-transparent fixed z-100 m-5">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-[#5749bd] items-center justify-center flex font-bold shadow-md">
            <p className="text-[#B2A5FF]">TH</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium bg-transparent mt-1">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#B2A5FF]' : 'text-[#DAD2FF]'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-[#B2A5FF]' : 'text-[#DAD2FF]'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar