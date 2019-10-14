import React from "react";

import {Icon} from 'antd';
import WebDevImage from "../images/webDevImage.png";

const Home = () => {
  return (
    <div className="body-cont">
      <div className="mainPageCont">
        <div className="headerAndLinkCont">
          <div>
            <h1 className="typography-h1-headline">
              Hi, Im Alex and I make websites.
            </h1>
          </div>
          <div className="links-cont">
            <div className="linkCont">
              <a href="https://github.com/algonzale" target="_blank">
                <Icon type="github" />
              </a>
            </div>
            <div className="linkCont">
              <a
                href="https://www.linkedin.com/in/alejandro-jimenez-628698169/"
                target="_blank"
              >
                <Icon type="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="imageCont">
          <img src={WebDevImage} />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F09819"
          fill-opacity="1"
          d="M0,128L60,160C120,192,240,256,360,250.7C480,245,600,171,720,165.3C840,160,960,224,1080,256C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;