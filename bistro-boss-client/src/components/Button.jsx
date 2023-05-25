import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({details, link}) => {
    console.log(link)
    return (
        <div className="text-center mb-10">
        <Link to={link}> <button className="btn btn-outline border-0 border-b-4 mt-3 uppercase">
          {details}
        </button>
        </Link>
      </div>
    );
};

export default Button;