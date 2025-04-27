import React, { useState } from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  // const [activeLoader, setActiveLoader] = useState("rotating");

  const loaderStyles = {
    container: "flex flex-col items-center justify-center min-h-screen  p-4",
    controlContainer: "mb-6 flex space-x-4",

    loaderColor: "#65558F",
  };

  return (
    <div className={loaderStyles.container}>
      <Oval
        height={80}
        width={80}
        color={loaderStyles.loaderColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={loaderStyles.loaderColor}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
