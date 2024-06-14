"use client";

import style from "./Home.module.scss";
import Image from "next/image";

import heroImg from "./assets/heroImg.png";
import design from "./assets/watch.png";
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
import NeedsT from "../components/NeedsToggle/NeedsTemplate";
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.hero}>
            <motion.div
              className={style.heroTxt}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                    duration: 1,
                  },
                },
              }}
            >
              <h1>Solana Watch</h1>
              <p>The First AI Wearables of Crypto</p>
            </motion.div>
            <motion.div
              className={style.heroImg}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                  y: 200,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1.5,
                    duration: 0.7,
                  },
                },
              }}
            >
              <Image src={heroImg} alt="Solana Watch" placeholder="blur" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                amount: "all",
                //margin: "-200px",
              }}
              className={style.heroDesc}

              //data-aos-offset="500"
            >
              <p>
                Introducing the Solana Watch — a cutting-edge timepiece designed
                to seamlessly blend advanced technology with sophisticated
                style.This sleek and stylish watch seamlessly blends high
                fashion with advanced technology, reflecting the innovation and
                speed of the Solana blockchain.{" "}
              </p>
            </motion.div>
          </div>

          <div className={style.design}>
            <motion.div
              className={style.designImg}
              initial={{
                x: -300,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              // viewport={{
              //   amount: "all",
              //   //margin: "-200px",
              // }}
            >
              <Image src={design} alt="Elegant design" placeholder="blur" />
            </motion.div>
            <motion.div
              className={style.designTxt}
              initial={{
                x: 300,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              // viewport={{
              //   amount: "all",
              //   //margin: "-200px",
              // }}
            >
              <h2>Innovation of Crypto Hardware</h2>
              <p>
                Solana Watch is a wearable AI device of crypto. It combines
                blockchain with smartwatch, enabling users to effortlessly and
                swiftly conduct various transactions anytime, anywhere through
                AI technology, reflecting the innovation and speed of web3.
              </p>
            </motion.div>
          </div>

          <div className={style.needs}>
            <div className={style.needsContent}>
              <h2>
                All Your <span>Crypto</span> Needs Only One Watch
              </h2>
              <div className={style.needsImg}>
                <Image src={Needs} alt="all your needs" placeholder="blur" />
              </div>
              {/* <NeedsToggle /> */}
              <NeedsT />
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
