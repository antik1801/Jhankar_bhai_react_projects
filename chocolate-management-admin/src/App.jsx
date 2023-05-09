import { useEffect, useState } from "react";
import "./App.css";
import ChocolateCarts from "./components/ChocolateCarts";

function App() {
  const [chocolates, setChocolates] = useState([]);
  const [render, setRender] = useState(false);
  const handleRender = () => {
    setRender(!render);
  };
  useEffect(() => {
    fetch("http://localhost:5000/chocolates")
      .then((res) => res.json())
      .then((data) => {
        setChocolates(data);
      });
  }, []);

  return (
    <div className="bg-gray-200 p-10">
      <div className="bg-white rounded-xl">
        <p className="text-3xl mt-5 bg-gradient-to-r from-[#DC8D48] via-[#91572B] to-[#692911] w-1/2 text-white py-[16px] px-[65px] mx-auto text-center rounded-xl">
          Chocolate Management System
        </p>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Country/Factory</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            {chocolates.map((chocolate) => (
              <ChocolateCarts
                key={chocolate._id}
                chocolate={chocolate}
                handleRender={handleRender}
              ></ChocolateCarts>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
