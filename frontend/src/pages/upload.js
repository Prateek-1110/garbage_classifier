import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import ResultCard from "../ components/resultcard";

function UploadCard() {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const onDrop = (acceptedFiles) => {

    const file = acceptedFiles[0];

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": []
    }
  });

  const handleUpload = async () => {

    if (!image) {
      alert("Upload an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      "http://127.0.0.1:8000/api/predict/",
      formData
    );

    setResult(res.data);
  };

  return (

    <div className="bg-white p-10 rounded-xl shadow-lg w-[420px] text-center">

      <h2 className="text-2xl font-bold mb-6">
        Upload Garbage Image
      </h2>

      {/* Drag & Drop Area */}

      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-10 rounded-lg cursor-pointer transition
        ${isDragActive ? "border-green-500 bg-green-50" : "border-gray-300"}`}
      >

        <input {...getInputProps()} />

        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="mx-auto max-h-48"
          />
        ) : (
          <p className="text-gray-500">
            Drag & drop an image here, or click to select
          </p>
        )}

      </div>

      <button
        onClick={handleUpload}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Predict
      </button>

      {result && <ResultCard result={result} />}

    </div>

  );
}

export default UploadCard;