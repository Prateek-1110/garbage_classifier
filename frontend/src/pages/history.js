import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    axios.get("http://127.0.0.1:8000/api/history/")
      .then(res=>{
        setData(res.data);
        setLoading(false);
      })
      .catch(err=>{
        console.log(err);
      })

  },[])

  if(loading){
    return (
      <div className="flex justify-center mt-20">
        <p className="text-xl text-gray-600">Loading history...</p>
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Prediction History
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {data.map(item=>(
          
          <div key={item.id}
          className="bg-white p-4 rounded-xl shadow-md">

            <img
              src={`http://127.0.0.1:8000${item.image}`}
              alt="prediction"
              className="rounded-lg mb-4"
            />

            <h2 className="text-xl font-bold text-green-600">
              {item.class}
            </h2>

            <p className="text-gray-600">
              Confidence: {item.confidence}%
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default History;