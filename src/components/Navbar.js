import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Sakshi Shastri</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
