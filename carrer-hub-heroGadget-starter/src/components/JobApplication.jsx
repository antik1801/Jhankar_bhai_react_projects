import React, { useState } from "react";
import toast from 'react-hot-toast';

function JobApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const handleJobSubmit = () =>{
    return toast.success("your submission has been submited!");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Resume:", resume);
    console.log("Cover Letter:", coverLetter);
    // Handle form submission logic here
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Resume:</label>
        <input type="file" id="resume" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="cover-letter" className="block text-gray-700 font-bold mb-2">Cover Letter:</label>
        <textarea id="cover-letter" value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"   onClick={handleJobSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default JobApplicationForm;
