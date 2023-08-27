import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img1.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SHOP</h1>
                    <p>
                    "Discover an exceptional collection of products at our shop, where quality is guaranteed. 
                    We take pride in offering a wide range of premium items. Your satisfaction is our promise."
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
