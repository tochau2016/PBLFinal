import React from 'react';
import { GoPlay } from 'react-icons/go';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { gsap } from 'gsap';
import imgbanner from '../img/banner-img.png';
import "./banner.scss";

export const Banner = () => {
  // const onEnter = ({ currentTarget }) => {
  //   gsap.to(currentTarget, {
  //     repeatDelay: 1,
  //     // rotate: 360,
  //     // yoyo: true,
  //     scale: 1.1,
  //   });
  // };
  // const onLeave = ({ currentTarget }) => {
  //   gsap.to(currentTarget, { scale: 1 });
  // };
  return (
    <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={imgbanner} />
            </div>
        </div>
  );
};
