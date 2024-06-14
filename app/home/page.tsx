import React from "react";
import style from "./Home.module.scss";
import Image from "next/image";

import heroImg from "./assets/heroImg.png";
import design from "./assets/design.png";
import Needs from "./assets/all.png";
import Explore from "./assets/explore.png";
import Specs from "./assets/specs.png";

import Watch from "./assets/watch.svg";
import Android from "./assets/android.svg";
import Media from "./assets/media.svg";
import Wifi from "./assets/wifi.svg";
import Bluetooth from "./assets/bluettoth.svg";
import Charge from "./assets/charging.svg";
import Battery from "./assets/battery.svg";

import Hand from "./assets/hand.png";
import Lines from "./assets/sublines.png";
import Subscribe from "./assets/subscribe.png";
import Mail from "./assets/mail.svg";

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
              <Image src={heroImg} alt="Solana Watch" placeholder="blur" />
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

          <div className={style.design}>
            <div className={style.designImg}>
              <Image src={design} alt="Elegant design" placeholder="blur" />
            </div>
          </div>

          <div className={style.needs}>
            <div className={style.needsContent}>
              <h2>
                All Your <span>Crypto</span> Needs Only One Watch
              </h2>
              <div className={style.needsImg}>
                <Image src={Needs} alt="all your needs" placeholder="blur" />
              </div>
            </div>
          </div>

          <div className={style.explore}>
            <div className={style.exploreContent}>
              <h2>Explore More Experiences</h2>
              <Image src={Explore} alt="explore" placeholder="blur" />
            </div>
          </div>

          <div className={style.specs}>
            <div className={style.specsContent}>
              <div className={style.specTitle}>
                <h2>Specs</h2>
              </div>

              <div className={style.specImg}>
                <Image src={Specs} alt="specs" placeholder="blur" />
              </div>
              <div className={style.specRows}>
                <div className={style.specRowA}>
                  <div className={style.specA}>
                    <Image src={Watch} alt="watch" />
                    <div className={style.specTxt}>
                      <p>2.86 inches</p>
                      <span>Screen Size</span>
                    </div>
                  </div>
                  <div className={style.specA}>
                    <Image src={Android} alt="android" />
                    <div className={style.specTxt}>
                      <p>Android 10</p>
                      <span>Operating System</span>
                    </div>
                  </div>
                  <div className={style.specA}>
                    <Image src={Media} alt="media" />
                    <div className={style.specTxt}>
                      <p>MTK6739 Quad-core</p>
                      <span>CPU</span>
                    </div>
                  </div>
                  <div className={style.specA}>
                    <Image src={Wifi} alt="connectivity" />
                    <div className={style.specTxt}>
                      <p>WiFi</p>
                      <span>Connectivity Technology</span>
                    </div>
                  </div>
                </div>
                <div className={style.specRowB}>
                  <div className={style.specA}>
                    <Image src={Bluetooth} alt="bluetooth" />
                    <div className={style.specTxt}>
                      <p>Bluetooth</p>
                      <span>Wireless Communication Standard</span>
                    </div>
                  </div>
                  <div className={style.specA}>
                    <Image src={Charge} alt="charging" />
                    <div className={style.specTxt}>
                      <p>Type-C Input</p>
                      <span>Charging</span>
                    </div>
                  </div>
                  <div className={style.specA}>
                    <Image src={Battery} alt="battery" />
                    <div className={style.specTxt}>
                      <p>2700mah Lithium Polymer</p>
                      <span>Battery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.future}>
            <div className={style.futureContent}>
              <div className={style.fImg}>
                <Image src={Hand} alt="wear the future" placeholder="blur" />
              </div>
              <div className={style.fTxt}>
                <h2>Wear the future of crypto</h2>
                <button>Pre-Order Now</button>
              </div>
            </div>
          </div>

          <div className={style.subscribe}>
            <div className={style.subLines}>
              <Image src={Lines} alt="lines" />
            </div>

            <div className={style.subscribeContent}>
              <h2>Stay in the Loop: Subscribe for Exclusive Updates!</h2>
              <div className={style.subscribeImg}>
                <Image
                  src={Subscribe}
                  alt="stay in the loop"
                  placeholder="blur"
                />
              </div>
              <div className={style.subscribeBx}>
                <div className={style.subscribeFields}>
                  <Image src={Mail} alt="mail" />
                  <input type="text" placeholder="Your Email" />
                  <button>Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
