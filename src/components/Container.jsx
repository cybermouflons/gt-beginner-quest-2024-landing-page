import React from "react";

function Container({children, otherClasses}) {
  return (
      <section className={`w-full text-center flex flex-col justify-center ${otherClasses}`}>
      {children}
    </section>
  );
}

export default Container;