
import React from "react";
import "./CarVideoSection.css";

const CarVideoSection = () => {
  return (
    <div className="carVideoSection mt-32">
      <h1 className="text-5xl font-bold my-10 text-center">India's most ambitious car</h1>
      <div>
        <video className=" w-full video" controls>
          <source src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/banner-video-mob.mp4" type="video/mp4" />
          Your browser does not support the video tag.
         </video>
      </div>
    </div>
  );
};

export default CarVideoSection;