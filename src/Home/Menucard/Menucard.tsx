import React from "react";
import { Layout } from "../../Layout/Layout";
import "./style.scss";
import firstpage from "../../assets/firstpage.jpeg";
import secondpage from "../../assets/secondpage.jpeg";

export const Menucard = () => {
  return (
    <Layout>
      <div className="menu-card-wrapper">
        <div className="first-page">
          <figure>
            <img src={firstpage} alt="" />
          </figure>
        </div>
        <div className="second-page">
          <figure>
            <img src={secondpage} alt="" />
          </figure>
        </div>
      </div>
    </Layout>
  );
};
