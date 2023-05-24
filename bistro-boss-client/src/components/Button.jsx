import React from 'react';

const Button = ({details}) => {
    return (
        <div className="text-center mb-20">
        <button className="btn btn-outline border-0 border-b-4 mt-3 uppercase">
          {details}
        </button>
      </div>
    );
};

export default Button;