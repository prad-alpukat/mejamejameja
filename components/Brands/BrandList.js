import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

import dextools from "../../public/images/dextools.png";
import gitbook from "../../public/images/gitbook.png";
import github from '../../public/images/github.png';
import huggingface from '../../public/images/hugginhface.png';
import linktree from '../../public/images/linktree.png';

const BrandList = () => {
  var settings = {
    centerMode: true,
    draggable: false,
    centerPadding: "150px",
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="brand-list brand-style-2 slider-brand slider-brand-activation "
      >
        <li className="slide-single-layout">
          <Link href="#">
            <Image
              src={dextools}
              width="auto"
              height={48}
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#">
            <Image
              src={gitbook}
              width="auto"
              height={48}
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#">
            <Image
              src={github}
              width="auto"
              height={48}
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#">
            <Image
              src={huggingface}
              width="auto"
              height={48}
              alt="Brand Image"
            />
          </Link>
        </li>
        <li className="slide-single-layout">
          <Link href="#">
            <Image
              src={linktree}
              width={"auto"}
              height={24}
              alt="Brand Image"
            />
          </Link>
        </li>
        {/* <li className="slide-single-layout">
          <Link href="#">
            <Image
              src={brandImg6}
              width={151}
              height="auto"
              alt="Brand Image"
            />
          </Link>
        </li> */}
      </Slider>
    </>
  );
};

export default BrandList;
