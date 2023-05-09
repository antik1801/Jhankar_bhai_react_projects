import "./App.css";

function App() {
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const newChocolate = {name, country, category}
    console.log(newChocolate);
    fetch('')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  };
  return (
    <div className="bg-gray-200 p-10">
      <div className="bg-white rounded-xl">
        <p className="text-3xl mt-5 bg-gradient-to-r from-[#DC8D48] via-[#91572B] to-[#692911] w-1/2 text-white py-[16px] px-[65px] mx-auto text-center rounded-xl">
          Chocolate Management System
        </p>
        <form className="mx-[113px] py-[48px]" onSubmit={handleAddChocolate}>
          <button className="btn btn-ghost">All Chocolate</button>
          <h2 className="text-2xl font-bold text-center">New Chocolates</h2>
          <p className="text-center">
            Use the below form to create new product
          </p>
          <div className="form-control w-full mt-5 mb-7">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered w-full p-5"
              />
            </label>
          </div>
          <div className="form-control w-full mb-7">
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group">
              <input
                name="country"
                type="text"
                placeholder="Country"
                className="input input-bordered w-full p-5"
              />
            </label>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select w-full mb-7 border">
              <option>Economy</option>
              <option>Premium</option>
              <option>Pro</option>
            </select>
          </div>
          <input
            type="submit"
            value="Save"
            className="btn btn-block bg-[#91572B]"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
