import { NavLink } from 'react-router'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-white ${
      isActive ? 'text-white' : 'text-gray-400'
    }`

  return (
    <header className="border-b border-white/10 bg-gray-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <NavLink to="/" className="text-2xl font-bold">
          Import<span className="text-blue-400">Drive</span>
        </NavLink>

        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" end className={linkClass}>
            Início
          </NavLink>

          <NavLink to="/carros" className={linkClass}>
            Carros
          </NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Navbar
