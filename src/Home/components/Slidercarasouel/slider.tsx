import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { SiZomato, SiSwiggy } from "react-icons/si";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import image1 from "../../../assets/mix veg theri.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";

export const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slider-carasouel-wrapper">
      <Carousel responsive={responsive} autoPlay autoPlaySpeed={4000} infinite>
        <div className="slider-container">
          <div className="left">
            <motion.h3
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.5,
              }}
            >
              ENJOY YOUR FAVORITE FOOD WITH FAMILY
            </motion.h3>
            <div className="links-food-app">
              <motion.a
                href="https://www.zomato.com/ncr/odana-biryani-more-sector-72-noida"
                className="zomato"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  ease: easeInOut,
                }}
              >
                <SiZomato className="icon-links" />
              </motion.a>
              <motion.a
                href="https://www.swiggy.com/restaurants/odana-biryani-and-more-sector-70-sector-117-noida-1-277080"
                className="swiggy"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  ease: easeInOut,
                }}
              >
                <SiSwiggy className="icon-links" />
                Swiggy
              </motion.a>
            </div>
          </div>
          <motion.div
            className="right"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.8,
              duration: 1.2,
              delay: 0.2,
              ease: easeInOut,
            }}
          >
            <figure>
              <img src={image1} alt="" />
            </figure>
          </motion.div>
        </div>
        <div className="slider-container">
          <div className="left">
            <h3> GET BEST QUALITY FOOD FROM US</h3>
            <div className="links-food-app">
              <a
                href="https://www.zomato.com/ncr/odana-biryani-more-sector-72-noida"
                className="zomato"
                target="_blank"
              >
                <SiZomato className="icon-links" />
              </a>
              <a
                href="https://www.swiggy.com/restaurants/odana-biryani-and-more-sector-70-sector-117-noida-1-277080"
                className="swiggy"
                target="_blank"
              >
                <SiSwiggy className="icon-links" />
                Swiggy
              </a>
            </div>
          </div>
          <div className="right">
            <figure>
              <img src={image3} alt="" />
            </figure>
          </div>
        </div>
        <div className="slider-container">
          <div className="left">
            <h3>THE HEALTHY FOOD FOR YOUR KIDS</h3>
            <div className="links-food-app">
              <a
                href="https://www.zomato.com/ncr/odana-biryani-more-sector-72-noida"
                className="zomato"
              >
                <SiZomato className="icon-links" />
              </a>
              <a
                href="https://www.swiggy.com/restaurants/odana-biryani-and-more-sector-70-sector-117-noida-1-277080"
                className="swiggy"
              >
                <SiSwiggy className="icon-links" />
                Swiggy
              </a>
            </div>
          </div>

          <div className="right">
            <figure>
              <img src={image4} alt="" />
            </figure>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
