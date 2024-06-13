import React from "react";
import style from "./Home.module.scss";
import heroImg from "./assets/heroImg.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.hero}>
            <div className={style.heroTxt}>
              <h1>Solana Watch</h1>
              <p>The First AI Wearables of Crypto</p>
            </div>
            <div className={style.heroImg}>
              <Image src={heroImg} alt="Solana Watch" />
            </div>
            <div className={style.heroDesc}>
              <p>
                Introducing the Solana Watch — a cutting-edge timepiece designed
                to seamlessly blend advanced technology with sophisticated
                style.This sleek and stylish watch seamlessly blends high
                fashion with advanced technology, reflecting the innovation and
                speed of the Solana blockchain.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
