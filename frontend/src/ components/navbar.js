import { Link } from "react-router-dom";

function Navbar() {
    const loginwithGoogle=()=>{
        window.location.href =  "http://127.0.0.1:8000/accounts/google/login/";
    };
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items=center">

      <h1 className="text-xl font-bold text-green-600">
        Garbage AI
      </h1>

      <div className="space-x-6 items-center">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/upload" className="hover:text-green-600">Upload</Link>
        <Link to="/history">History</Link>
        <button
        onClick={loginwithGoogle}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Login with Google</button>
      </div>

    </nav>
  );
}

export default Navbar;