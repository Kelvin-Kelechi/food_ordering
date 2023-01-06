import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.css";
const Slider = () => {
  const [slide, setSlide] = useState(0);
  const images = [
    "/image/featured.png",
    "/image/featured2.png",
    "/image/featured3.png",
  ];
  const handleSlide = (direction) => {
    if (direction === "l") {
      setSlide(slide !== 0 ? slide - 1 : 2);
    }
    if (direction === "r") {
      setSlide(slide !== 2 ? slide + 1 : 0);
    }
  };
  console.log(slide)
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleSlide("l")}
      >
        <Image
          src="/image/arrowl.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleSlide("r")}
      >
        <Image
          src="/image/arrowr.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Slider;
