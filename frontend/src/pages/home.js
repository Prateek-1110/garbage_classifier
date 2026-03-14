import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">

      {/* Hero Section */}

      <div className="flex flex-col items-center justify-center text-center pt-32 px-6">

        <h1 className="text-6xl font-extrabold mb-6">
          AI Garbage Classification
        </h1>

        <p className="text-xl max-w-2xl mb-10 opacity-90">
          Upload a photo of waste and our AI will instantly classify it and tell you
          how to dispose it responsibly. Helping build a cleaner and smarter planet.
        </p>

        <Link to="/upload">
          <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition">
            Try the AI Demo
          </button>
        </Link>

      </div>


      {/* Features */}

      <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20">

        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Instant AI Detection</h2>
          <p>
            Our deep learning model analyzes waste images and classifies them
            into recyclable categories within seconds.
          </p>
        </div>

        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Smart Disposal Advice</h2>
          <p>
            The system provides guidance on how to dispose or recycle waste
            responsibly to reduce environmental impact.
          </p>
        </div>

        <div className="bg-white text-black p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Prediction History</h2>
          <p>
            Logged in users can view previous predictions and track waste
            classification activity.
          </p>
        </div>

      </div>


      {/* Footer */}

      <div className="text-center pb-10 opacity-80">

        <p>
          Built with React, Django and Deep Learning
        </p>

      </div>

    </div>

  );
}

export default Home;