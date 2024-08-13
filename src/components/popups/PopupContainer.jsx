import React from "react";

const PopupContainer = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] z-50 bg-black-950/50 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default PopupContainer;
