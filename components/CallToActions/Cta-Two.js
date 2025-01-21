import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";


import viewImg from "../../public/images/cta-img/ctaa1.png";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import bgLight from "../../public/images/bg/bg-shape-tree.png";

const CtaTwo = () => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="aiwave-cta">
            <div className="inner">
              <div className="content-left">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                    Our Project
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--20">
                  GenOS AI($GENOS)
                  </h2>
                  <p className="description b1">
                  GenOS AI($GENOS) is revolusionizing the blockchain space by merging<br /> 
                  the power of decentralized technology with AI innovation.
                  From launcing <br />tokens to creating intelligent GenOS AI, empowers users with <br />
                  tools to automate,scale,and innovate within the blockchain ecosystem
                  </p>
                </div>
              </div>
              <div className="content-right">
                <div className="img-right">
                  <Image
                    src={viewImg}
                    width={449}
                    height={499}
                    alt="Mobile View"
                  />
                </div>
              </div>
              <div className="bg-shape-one">
                <Image src={bgShape} width={639} height={404} alt="Bg shape" />
              </div>
            </div>
            <div className="bg-shape-inside">
              <Image src={bgLight} width={968} height={1103} alt="Bg shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;