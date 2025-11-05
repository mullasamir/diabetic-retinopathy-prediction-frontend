import React, { useState } from "react";

const Detect = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload an image first!");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Diabetic Retinopathy Detection
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center space-y-4 w-full max-w-md"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded-lg w-full cursor-pointer"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-md text-center border border-blue-100">
          <p className="text-lg font-semibold text-gray-700">
            Prediction: <span className="text-blue-600">{result.prediction}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Confidence: {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Detect;
