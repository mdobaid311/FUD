import React from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const images = [
  "https://wallpaperaccess.com/full/462773.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzW8-QzrDo--Gxy4NW2_NdoOCfCwDZFyj_gkozs54tsZISVckjH_B9hbGtSWPQl0lJR8&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEU6ihCPxwSzUcjAUcjIltRfy-GIdQEkO-ZvgCPYM-qrO8UWyj_DhNVtZc2nBfvaEPMEA&usqp=CAU",
];

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="left arrow" layout="fill" />
      </div>
      <div className={styles.wrapper}></div>
      <div className={styles.imgContainer}>
        {images.map((image, i) => {
          console.log(image);
          return <img src={image} alt="img" key={i} />;
        })}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="right arrow" layout="fill" />
      </div>
      asd
    </div>
  );
};

export default Featured;
