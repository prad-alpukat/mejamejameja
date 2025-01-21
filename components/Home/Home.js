import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sal from "sal.js";

import bannerImg from "../../public/images/bg/slider-main-image.png";
import bannerWhiteImg from "../../public/images/light/bg/slider-main-image.png";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import bgShape from "../../public/images/bg/split-bg-shape.png";
import bgShapeOne from "../../public/images/bg/bg-shape-four.png";
import bgShapeTwo from "../../public/images/bg/bg-shape-five.png";
import BrandList from "../Brands/BrandList";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import CtaOne from "../CallToActions/Cta-One";
import CtaTwo from "../CallToActions/Cta-Two";
import { useAppContext } from "@/context/Context";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { isLightTheme } = useAppContext();

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h2 className="title display-one">
                  Transforming Complexities into Seamless Solutions for Innovative Development
                </h2>
                <p className="description">
                  Build,deploy,and invest in GenOS AI with blockchain- <br />
                  backed innovation
                </p>
                <div className="form-group">
                  <video
                    id="slider-video"
                    width="600"
                    height="360"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="video-homepage"
                  >
                    <source src="/images/videos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Link className="btn-default " href="http://deploy.genos.systems/marketplace">
                    LAUNCH APP
                  </Link>
                </div>
                <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-small">
                  <div className="container">
                    <CtaTwo />
                  </div>
                </div>

                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rainbow-brand-area rainbow-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <div
                  className="section-title rating-title text-center sal-animate"
                  data-sal="slide-up"
                  data-sal-duration="700"
                  data-sal-delay="100"
                >
                  <p className="b1 mb--0 small-title">OUR PARTNERSHIP</p>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt--10">
                <BrandList />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-xl-10">
              <div className="slider-frame responsive-slider-frame">
                <video
                  className="slider-video-effect"
                  width={"100%"}
                  height="auto" /* Menjaga aspek rasio video */
                  controls /* Menambahkan kontrol pengguna */
                  controlsList="nofullscreen nodownload" // Membatasi kontrol hanya untuk play/pause dan volume
                  autoPlay
                  loop
                >
                  <source src="/images/videos/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center pb--60"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              ></div>
            </div>
          </div>
          <TabStyleOne />
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">GenOS AI</span>
                </h4>
                <h2 className="title mb--60">Key Futures</h2>
              </div>
            </div>
          </div>
        </div>
        <ServiceStyleOne />
      </div>

      <div className="rainbow-advance-tab-area genos-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src={bgShape} width={630} height={879} alt="Bg Shape" />
        </div>
      </div>
      <div className="rainbow-rn-cta">
        <div className="container">
          <CtaOne />
        </div>
      </div>
    </>
  );
};

export default Home;
