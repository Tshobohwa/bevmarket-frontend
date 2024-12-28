import React from "react";
import {ClipLoader} from "react-spinners";

// eslint-disable-next-line react/prop-types
const AuthButton = ({ name, onClick, loading = false }) => {
  return (
    <button
      className="w-full h-[3rem] bg-red-600 text-white font-semibold font-poppins text-lg rounded-lg hover:bg-red-700"
      onClick={onClick}
    >
      {loading ? (
          <ClipLoader size={25} color="#fff" loading={loading}/>
      ) : name }
    </button>
  );
};

export default AuthButton;
