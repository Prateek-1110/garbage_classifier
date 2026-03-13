import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">

      <h1 className="text-5xl font-bold mb-6">
        Smart Garbage Classification
      </h1>

      <p className="text-xl mb-10 text-center max-w-xl">
        Upload a picture of waste and our AI will classify it and tell you how to dispose it responsibly.
      </p>

      <Link to="/upload">
        <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition">
          Upload Image
        </button>
      </Link>

    </div>
  );
}

export default Home;