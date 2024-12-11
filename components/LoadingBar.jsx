"use client";

import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }} /> 
      {/* 외부 컴포넌트에 tailwindcss 적용이 안될까봐 cssOverride로 width를 100%로 지정 */}
    </div>
  );
};

export default LoadingBar;
