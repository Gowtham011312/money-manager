import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-60 min-h-screen bg-gray-800 shadow p-4">
      <h1 className="text-2xl font-bold text-green-400 mb-6">
        Money Manager
      </h1>

      <nav className="flex flex-col gap-4">
        <NavLink to="/" className="text-white hover:text-green-600">
          Home
        </NavLink>

        <NavLink to="/dashboard" className="text-white hover:text-green-600">
          Dashboard
        </NavLink>

        <NavLink to="/charts" className="text-white hover:text-green-600">
          Charts
        </NavLink>
        <NavLink to="/accounts" className="text-white hover:text-green-600">
          Accounts
        </NavLink>
      </nav>
    </div>
  );
}
