"use client";
import React, { useEffect, useState } from "react";
import style from "./Template.module.scss";
import Image from "next/image";
import Arrow1 from "./arrow.svg";
import Arrow2 from "./arrow2.svg";

const NeedsToggle = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  let number = 1;
  return (
    <>
      <div className={style.container}>
        <div className={style.needs}>
          {data.map((item, i) => (
            <div className={style.need} key={item?.title}>
              <div className={style.needTop} onClick={() => toggle(i)}>
                <div className={style.needNumber}>
                  <p>{number++}</p>
                </div>
                <div className={style.needTitle}>
                  <h3>{item?.title}</h3>
                </div>
                <div className={style.needIcon}>
                  <Image src={selected === i ? Arrow1 : Arrow2} alt="more" />
                </div>
              </div>
              <div
                //className={style.needDesc}
                className={
                  selected === i
                    ? `${style.needDesc} ${style.show}`
                    : style.needDesc
                }
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const data = [
  {
    title: "AI Trading Assistant",
    description: `Utilize voice control to set price alerts and develop trading strategies.`,
  },
  {
    title: "dApp/App Store",
    description: `Access a diverse range of Solana ecosystem dApps and Web2 applications.`,
  },
  {
    title: "DeFi Integration",
    description: `Earn crypto rewards and real-life benefits.`,
  },
  {
    title: "Smartphone Connectivity",
    description: `Effortlessly sync and manage messages.`,
  },
];

export default NeedsToggle;
