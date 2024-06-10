import React from "react";

function Button({ children, otherClasses, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${otherClasses} w-[200px] rounded-lg my-4 px-6 py-3 hover:opacity-85 transition-all`}>
      {children}
    </button>
  );
}

export default Button;
