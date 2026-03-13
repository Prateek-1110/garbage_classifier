import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">

      <h1 className="text-xl font-bold text-green-600">
        Garbage AI
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/upload" className="hover:text-green-600">Upload</Link>
      </div>

    </nav>
  );
}

export default Navbar;