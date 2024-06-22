"use client";

import { useEffect, useState } from "react";
import style from "./Home.module.scss";
import Image from "next/image";

import heroImg from "./assets/watchNew2.png";
import design from "./assets/watch.png";
//import Needs from "./assets/all.png";
import NeedsWatch from "./assets/needsWatch.png";
import NeedsIcons1 from "./assets/needsIcons1.png";
import NeedsIcons2 from "./assets/needsIcons2.png";
import Explore from "./assets/explore.png";
import Specs from "./assets/specs2.gif";
import Ellipse from "./assets/Ellipse.png";

import Watch from "./assets/watch.svg";
import Android from "./assets/android.svg";
import Media from "./assets/media.svg";
import Wifi from "./assets/wifi.svg";
import Bluetooth from "./assets/bluettoth.svg";
import Charge from "./assets/charging.svg";
import Battery from "./assets/battery.svg";

//import Hand from "./assets/hand.png";
import Future from "./assets/future2.jpg";
import Lines from "./assets/sublines.png";
import Subscribe from "./assets/subscribe.png";
import Mail from "./assets/mail.svg";
import NeedsT from "../components/NeedsToggle/NeedsTemplate";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";

const HomePage = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const [showIcons, setShowIcons] = useState(false);

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
              {/* <p>The First AI Wearables of Crypto</p> */}
              <p>The Premier AI Wearable for the Solana Key Players.</p>
            </motion.div>
            <motion.div
              className={style.heroImg}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  // scale: 0.5,
                  opacity: 0,
                  y: 200,
                },
                visible: {
                  // scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    delay: 1.5,
                    duration: 1.7,
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
              {/* <p>
                Introducing the Solana Watch — a cutting-edge timepiece designed
                to seamlessly blend advanced technology with sophisticated
                style.This sleek and stylish watch seamlessly blends high
                fashion with advanced technology, reflecting the innovation and
                speed of the Solana blockchain.{" "}
              </p> */}
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
              <h2>Pioneering Crypto Hardware</h2>
              <p>
                Experience the cutting-edge fusion of blockchain technology and
                wearable devices with Solana Watch, enabling seamless
                transactions and never before seen Ease of access through AI
                integration.
              </p>
            </motion.div>
          </div>

          <div className={style.needs}>
            <div className={style.needsContent}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                {/* All Your <span>Crypto</span> Needs Only One Watch */}
                Unmatched <span>Crypto</span> Features in One Device
              </motion.h2>
              {/* <motion.div
                className={style.needsImg}
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1,
                  },
                }}
              >
                <Image src={Needs} alt="all your needs" placeholder="blur" />
              </motion.div> */}
              <div className={style.needsImgs}>
                <AnimatePresence mode="wait">
                  <motion.div
                    className={style.needsIcons1}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
                    // variants={{
                    //   hidden: {
                    //     opacity: 0,
                    //     scale: 0.8,
                    //     x: 100,
                    //   },
                    //   visible: {
                    //     opacity: 1,
                    //     scale: 1,
                    //     x: 0,
                    //     transition: {
                    //       type: "spring",
                    //       duration: 1,
                    //     },
                    //   },
                    //   exit: {
                    //     opacity: 0,
                    //     scale: 0.8,
                    //     x: 100,
                    //     transition: {
                    //       duration: 0.6,
                    //     },
                    //   },
                    // }}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: 100,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        duration: 1,
                      },
                    }}
                  >
                    <Image src={NeedsIcons1} alt="icons" placeholder="blur" />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  className={style.needsImg}
                  initial={{
                    // scale: 0.7,
                    opacity: 0,
                  }}
                  whileInView={{
                    // scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      duration: 1,
                    },
                  }}
                >
                  <Image
                    //onMouseEnter={() => setShowIcons(!showIcons)}
                    // onMouseLeave={() => setShowIcons(!showIcons)}
                    src={NeedsWatch}
                    alt="all your needs"
                    placeholder="blur"
                  />
                </motion.div>
                <AnimatePresence mode="wait">
                  <motion.div
                    className={style.needsIcons2}
                    // initial="hidden"
                    // animate="visible"
                    // exit="exit"
                    // variants={{
                    //   hidden: {
                    //     opacity: 0,
                    //     scale: 0.8,
                    //     x: -100,
                    //   },
                    //   visible: {
                    //     opacity: 1,
                    //     scale: 1,
                    //     x: 0,
                    //     transition: {
                    //       type: "spring",
                    //       duration: 1,
                    //     },
                    //   },
                    //   exit: {
                    //     opacity: 0,
                    //     scale: 0.8,
                    //     x: -100,
                    //     transition: {
                    //       duration: 0.6,
                    //     },
                    //   },
                    // }}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      x: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        duration: 1,
                      },
                    }}
                  >
                    <Image src={NeedsIcons2} alt="icons" placeholder="blur" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <NeedsT />
            </div>
          </div>

          <div className={style.explore}>
            <div className={style.exploreContent}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                Explore More Experiences
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -170,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 1.1,
                  },
                }}
              >
                <Image src={Explore} alt="explore" placeholder="blur" />
              </motion.div>
            </div>
          </div>

          <div className={style.specs}>
            <div className={style.specsContent}>
              <div className={style.specTitle}>
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  Specifications
                </motion.h2>
              </div>
              <Image className={style.ellipse} src={Ellipse} alt="shape" />
              <motion.div
                className={style.specImg}
                initial={{
                  opacity: 0,
                  scale: 0.6,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 1.3,
                  },
                }}
              >
                <Image src={Specs} alt="specs" />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 150,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                  },
                }}
                className={style.specRows}
              >
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
              </motion.div>
            </div>
          </div>

          <div className={style.future}>
            {/* <div className={style.futureContent}>
              <motion.div
                className={style.fImg}
                initial={{
                  opacity: 0,
                  x: -200,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    //type: "spring",
                    duration: 1.6,
                  },
                }}
              >
                <Image src={Hand} alt="wear the future" placeholder="blur" />
              </motion.div>
              <motion.div className={style.fTxt}>
                <h2>Wear the future of crypto</h2>
                <button>Pre-Order Now</button>
              </motion.div>
            </div> */}
            <div className={style.futureContent}>
              <motion.div
                className={style.fImg}
                initial={{
                  opacity: 0,
                  //x: -200,
                }}
                whileInView={{
                  opacity: 1,
                  //sx: 0,
                  transition: {
                    //type: "spring",
                    duration: 1.6,
                  },
                }}
              >
                <Image src={Future} alt="wear the future" placeholder="blur" />
              </motion.div>
              <motion.div className={style.fBtn}>
                <button>Pre-Order Now</button>
              </motion.div>
            </div>
          </div>

          <div className={style.subscribe}>
            <div className={style.subLines}>
              <Image src={Lines} alt="lines" />
            </div>

            <div className={style.subscribeContent}>
              {/* <h2>Stay in the Loop: Subscribe for Exclusive Updates!</h2> */}
              <h2>
                Stay ahead in the crypto world with Solana Watch. Pre-order now
                and subscribe for exclusive updates.
              </h2>
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
