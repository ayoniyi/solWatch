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
    title: "Trading AI Assistant",
    description: `Voice-controlled AI trading assistant, easily set price alerts, establish trading plans, making trading operations simpler with the AI.`,
  },
  {
    title: "dApp/App Store",
    description: `Experience the diverse range of dApps within the Solana ecosystem in the dApp Store, or download the required applications from the App Store, seamlessly transitioning from Web2 to Web3.`,
  },
  {
    title: "DeFi System",
    description: `Whether in the crypto or real life, you can earn rewards by using Solana Watch, unlock the new DeFi experience from now.`,
  },
  {
    title: "Phone Connectivity",
    description: `Supporting connectivity with mainstream smartphones, Solana Watch enables receive and reply messages from phone, saving time and increasing efficiency.`,
  },
];

export default NeedsToggle;
