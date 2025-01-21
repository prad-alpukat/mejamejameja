import Image from "next/image";
import Link from "next/link";
import React from "react";

import FooterData from "../../data/footer.json";

import logo from "../../public/images/logo/logo.png";
import FooterProps from "./FooterProps";

const Footer = () => {
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo}
                        width={135}
                        height={35}
                        alt="ChatBot Logo"
                      />
                    </Link>
                  </div>
                  <p className="b1 desc-text">
                    Empowering Blockchain innovation <br /> 
                    with AI-drivenv tools for token <br />
                    launches and intelligent agent<br /> creation{" "}
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <FooterProps list={data.links} />
                    </div>
                  ))}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="rainbow-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">Social Community</h4>
                    <div className="inner">
                      <ul className="footer-link contact-link">
                        <li>
                          <i className="contact-icon fa-brands fa-x"></i>
                          <Link href="https://x.com/genosaieth ">X</Link>
                        </li>
                        <li>
                          <i className="contact-icon fa-brands fa-telegram"></i>
                          <Link href="https://t.me/genosaieth">Telegram</Link>
                        </li>
                        <li>
                          <i className="contact-icon fa-brands fa-medium"></i>
                          <Link href="https://genosai.medium.com">Medium</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
