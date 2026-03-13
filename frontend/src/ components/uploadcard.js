import { useState } from "react";
import axios from "axios";
import ResultCard from "./resultcard.js";

function UploadCard() {

  const [image,setImage] = useState(null);
  const [preview , setPreview]=useState(null);
  const [result,setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    if(!image){
      alert("Upload an image first")
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
        setLoading(true);
        setResult(null);
        const res = await axios.post(
            "http://127.0.0.1:8000/api/predict/",
            formData
        );
        setResult(res.data);
    }
    catch(error){
        console.error(error);
        alert("prediction failed");
    }
    setLoading(false);
  };

  return (

    <div className="bg-white p-10 rounded-xl shadow-lg w-96 text-center">

      <h2 className="text-2xl font-bold mb-6">
        Upload Garbage Image
      </h2>

      <input
        type="file"
        onChange={(e)=>setImage(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        Predict
      </button>

      {loading && (
  <div className="mt-6 flex flex-col items-center">

    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>

    <p className="mt-2 text-gray-600">
      Analyzing waste using AI...
    </p>

  </div>
)}

{result && <ResultCard result={result} />}

    </div>

  );
}

export default UploadCard;