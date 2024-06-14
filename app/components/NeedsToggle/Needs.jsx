"use client";
import React, { useEffect } from "react";
import style from "./Need.module.scss";

const NeedsToggle = () => {
  useEffect(() => {
    const accordion = document.getElementsByClassName(style.need);
    let i;
    for (i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        if (this.classList.contains(style.activeAcc)) {
          this.classList.remove(style.activeAcc);
        } else {
          this.classList.add(style.activeAcc);
        }
      });
    }
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.needs}>
          <div className={style.need}>
            <div className={style.faqLabel}>
              <div className={style.needNumber}>
                <p>1</p>
              </div>
              <div className={style.needTitle}>
                <h3>Trading AI Assistant</h3>
              </div>
            </div>
            <div className={style.faqContentsm}>
              <p>
                Voice-controlled AI trading assistant, easily set price alerts,
                establish trading plans, making trading operations simpler with
                the AI.
              </p>
            </div>
          </div>
          {/* <div nclassName={style.need}>
            <div className={style.faqLabel}>
              <div className={style.needNumber}>
                <p>1</p>
              </div>
              <div className={style.needTitle}>
                <h3>Trading AI Assistant</h3>
              </div>
            </div>
            <div className={style.faqContentsm}>
              <p>
                Voice-controlled AI trading assistant, easily set price alerts,
                establish trading plans, making trading operations simpler with
                the AI.
              </p>
            </div>
          </div> */}
          {/* <div className={style.need}>
            <div className={style.needTop}>
              <div className={style.needNumber}>
                <p>1</p>
              </div>
              <div className={style.needTitle}>
                <h3>Trading AI Assistant</h3>
              </div>
              <div className={style.needIcon}></div>
            </div>
            <div className={style.needDesc}>
              <p>
                Voice-controlled AI trading assistant, easily set price alerts,
                establish trading plans, making trading operations simpler with
                the AI.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NeedsToggle;
