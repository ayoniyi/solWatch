import React from "react";
import style from "./Footer.module.scss";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";

import Tg from "./tg.svg";
import Discord from "./discord.svg";
import X from "./x.svg";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.footerTxt}>
            <div className={style.links}>
              <Link href="#">
                <p>Features</p>
              </Link>
              <Link href="#">
                <p>SolWatch Experience</p>
              </Link>
              <Link href="#">
                <p>About</p>
              </Link>
            </div>
            <div className={style.logoBx}>
              <Image src={Logo} alt="logo" />
              <p>
                Solana <strong>Watch</strong>{" "}
              </p>
            </div>
            <div className={style.socials}>
              <Link href="#" className={style.social}>
                <Image src={X} alt="x" />
              </Link>
              <Link href="#" className={style.social}>
                <Image src={Tg} alt="telegram" />
              </Link>
              <Link href="#" className={style.social}>
                <Image className={style.disc} src={Discord} alt="discord" />
              </Link>
            </div>
          </div>
          <div className={style.copyright}>
            <p>Solana Watch &copy; 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
