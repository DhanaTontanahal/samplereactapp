import { useState } from "react";

export default function InputForm() {
  const [formData, setFormData] = useState({ field1: "", field2: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 w-96 shadow-lg bg-white rounded-2xl">
        <h2 className="text-xl font-semibold text-center mb-4">
          Enter Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="field1"
            placeholder="First Input"
            value={formData.field1}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="field2"
            placeholder="Second Input"
            value={formData.field2}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
