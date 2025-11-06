import React, { useState, useEffect } from "react";

const Detect = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [model, setModel] = useState("Custom CNN");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await fetch("https://diabetic-retinopathy-prediction-backend-4.onrender.com/predictions");
      const data = await res.json();
      setHistory(data.reverse().slice(0, 10)); // show only last 10
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) setPreview(URL.createObjectURL(selected));
    else setPreview(null);
  };

  const handleModelChange = (e) => setModel(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload an image first!");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("model_name", model);

    try {
      const res = await fetch("https://diabetic-retinopathy-prediction-backend-4.onrender.com/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Prediction failed");
      const data = await res.json();
      setResult(data);
      fetchHistory();
    } catch (error) {
      console.error(error);
      alert("Error occurred during prediction!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white text-gray-800">
      {/* Background animated bubbles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`bubble absolute rounded-full opacity-60`}
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              background: `radial-gradient(circle at center, ${
                ["#c084fc", "#f9a8d4", "#6ee7b7", "#fde68a"][
                  i % 5
                ]
              } 0%, transparent 70%)`,
            }}
          ></div>
        ))}
      </div> */}
       <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-10 z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
        Diabetic Retinopathy Detection
      </h1>

      {/* Upload + Prediction Boxes */}
      <div className="z-10 mt-10 flex flex-col md:flex-row gap-10 justify-center items-start w-full max-w-6xl px-6">
        {/* Upload Section */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center space-y-5"
        >
          <h2 className="text-xl font-semibold text-blue-600">Upload Image</h2>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-lg w-full cursor-pointer"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-64 h-64 object-cover rounded-xl shadow-md border border-gray-200"
            />
          )}

          <select
            value={model}
            onChange={handleModelChange}
            className="border p-2 rounded-lg w-full bg-white text-gray-700 cursor-pointer"
          >
            <option value="Custom CNN">Custom CNN</option>
            {/* <option value="inceptionResnetV2">InceptionResNetV2</option> */}
            <option value="ResNet152">ResNet152</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-xl font-semibold text-white transition-all w-full ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:scale-105"
            }`}
          >
            {loading ? "Analyzing..." : "Upload & Analyze"}
          </button>
        </form>

        {/* Prediction Result */}
        <div className="flex-1 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Prediction Result
          </h2>

          {result ? (
            <>
              {preview && (
                <img
                  src={preview}
                  alt="Analyzed"
                  className="w-64 h-64 object-cover rounded-xl shadow-md border border-gray-200 mb-4"
                />
              )}
              <p className="text-lg font-medium">
                Model Used:{" "}
                <span className="text-indigo-600">{result.model_used}</span>
              </p>
              <p className="text-lg font-medium">
                Prediction:{" "}
                <span className="text-blue-600">{result.prediction}</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Confidence: {result.confidence}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Image Saved as: {result.image_name}
              </p>
            </>
          ) : (
            <p className="text-gray-400 mt-10">No prediction yet</p>
          )}
        </div>
      </div>

      {/* Prediction History */}
      {history.length > 0 && (
        <div className="z-10 mt-12 w-full max-w-6xl bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Recent Predictions
          </h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-left">Prediction</th>
                  <th className="p-3 text-left">Confidence</th>
                  <th className="p-3 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{item.image_name}</td>
                    <td className="p-3">{item.model_used}</td>
                    <td className="p-3 text-blue-600">{item.prediction}</td>
                    <td className="p-3">{item.confidence}%</td>
                    <td className="p-3 text-xs text-gray-500">
                      {new Date(item.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CSS for bubbles */}
      
    </div>
  );
};

export default Detect;





// import React, { useState } from "react";

// const Detect = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return alert("Please upload an image first!");

//     setLoading(true);
//     const formData = new FormData();
//     formData.append("file", file);

//     const res = await fetch("http://127.0.0.1:8000/predict", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     setResult(data);
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">
//         Diabetic Retinopathy Detection
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center space-y-4 w-full max-w-md"
//       >
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="border p-2 rounded-lg w-full cursor-pointer"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
//         >
//           {loading ? "Analyzing..." : "Upload & Analyze"}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-8 p-6 bg-white rounded-2xl shadow-md text-center border border-blue-100">
//           <p className="text-lg font-semibold text-gray-700">
//             Prediction: <span className="text-blue-600">{result.prediction}</span>
//           </p>
//           <p className="text-sm text-gray-500 mt-1">
//             Confidence: {(result.confidence * 100).toFixed(2)}%
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Detect;