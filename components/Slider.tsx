import React, { useState } from "react";
import { sliderItems } from "../data";
import Image from "next/image";
// import img1 from '../public/images/a.jpg'
// import img2 from '../public/images/b.jpg'
// import img3 from '../public/images/c.jpg'

import rightArrow from "../public/images/right-arrow.png";
import leftArrow from "../public/images/left-arrow.png";
function Slider() {
  const [images, setimages] = useState(sliderItems);
  const [currentIndex, setCurrentIndex] = useState(1);
  const prevImage = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex === images.length) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className=" relative border  flex flex-row "
      style={{ height: "70vh" }}
    >
      <div
        className="cursor-pointer absolute top-2/4 left-2 	"
        style={{ height: "30px", width: "30px", zIndex: "99" }}
      >
        <Image
          src={leftArrow}
          alt="left"
          onClick={prevImage}
          className="transform-translate-y-1/2"
        />
      </div>
      <div
        className="cursor-pointer absolute top-2/4 right-2"
        style={{ height: "30px", width: "30px", zIndex: "99" }}
      >
        <Image
          src={rightArrow}
          alt="right"
          fill
          onClick={nextImage}
          className="transform-translate-y-1/2"
        />
      </div>
      {sliderItems?.map((item) =>
        item.id == currentIndex ? (
          <div
            key={item.id}
            style={{
              position: "relative",
              height: "auto",
              width: "100%",
              maxHeight: "70vh",
            }}
          >
            <Image src={item.img} alt="" fill />
            <p className="absolute  text-xs sm:text-sm md:text-2xl  top-2/4 md:top-[47%] font-bold   mb-2 left-[28%] md:left-[20%]">
              {item.title}
            </p>
            <p className="absolute text-xs sm:text-sm  md:text-1xl lg:text-2xl top-[55%]  left-[10%] right-[10%]    md:left-[20%]  ">
              {item.desc}
            </p>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Slider;
