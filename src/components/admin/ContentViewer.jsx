import React from "react";
import { useSelector } from "react-redux";
import { AdminComps } from "../../Data/SidebarData";

const ContentViewer = () => {
  const currContent = useSelector((state) => state.admin);
  return (
    <div className="w-[80%]  sm:w-[100%] sm:ml-[0%] ml-[20%] p-10 sm:p-0 bg-blue-300 flex justify-center items-start pt-36 sm:pt-32">
        
      {AdminComps?.map((comp) => {
        if (currContent?.content === comp?.name) {
          return comp?.comp;
        } else {
          return null; // or some default value like `null`
        }
      })}
    </div>
  );
};

export default ContentViewer;
