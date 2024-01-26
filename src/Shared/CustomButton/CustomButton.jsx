
import React from 'react';

const CustomButton = ({ bgColor, outlineColor, children }) => {
  return (
    //    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>

    <button
      className={`border ${outlineColor} bg-${bgColor} hover:bg-${bgColor}-dark text-white py-2 px-4 rounded bg-gradient-to-r from-secondary to-primary`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
