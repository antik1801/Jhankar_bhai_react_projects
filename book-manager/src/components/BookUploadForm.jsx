import React from "react";

const BookUploadForm = () => {
  return (
    <div className="p-3 bg-light">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Book Name
          </label>
          <input type="email" className="form-control" id="inputEmail4" name="bookName"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Author Name
          </label>
          <input type="text" className="form-control" id="autherName" name="authorName"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Photo URL
          </label>
          <input type="url" className="form-control" id="inputPassword4" name="photoURL"/>
        </div>
        <div className="col-md-6">
          <select>
            <option value=""></option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookUploadForm;
