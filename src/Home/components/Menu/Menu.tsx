import "./style.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

export const Menu = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="menu-wrapper">
      <h2>Best Sellers</h2>
      <div className="menu-container">
        <motion.div
          className="items"
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <figure>
            <img
              src="https://cookingfromheart.com/wp-content/uploads/2021/01/Veg-Tehri-3.jpg"
              alt=""
            />
          </figure>
          <h3>veg theri</h3>
          <div className="items-name">
            <ul>
              <li>methi gobbi ki theri</li>
              <li>mix veg theri</li>
              <li>aloo soyawadi ki theri</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="items"
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
              alt=""
            />
          </figure>
          <h3>Khichadi</h3>
          <div className="items-name">
            <ul>
              <li>just khichadi</li>
              <li>lasooni khichadi</li>
              <li>masala veg khichadi</li>
              <li>rajastan achari khichadi</li>
              <li>Palak Paneer Porridge</li>
              <li>Bulgar Wheat Daliya</li>
              <li>Power Packed Quinca</li>
              <li>Mota Bhai ki Khichadi</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="items"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <figure>
            <img
              src="https://www.spiceupthecurry.com/wp-content/uploads/2022/04/bang-bang-cauliflower-1.jpg"
              alt=""
            />
          </figure>
          <h3>Regional</h3>
          <div className="items-name">
            <ul>
              <li>Pongal</li>
              <li>Lemon Rice</li>
              <li>curd rice</li>
              <li>Bisibella Bath</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="items"
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <figure>
            <img
              src="https://v2s3z9v2.stackpathcdn.com/videos/2591/20-05-2019/YT_Crispy_Chicken__7L9U4CYS_crop_resize_1024x576.jpg"
              alt=""
            />
          </figure>
          <h3>Biryani</h3>
          <div className="items-name">
            <ul>
              <li>Mix Veg Biryani</li>
              <li>Paneer Biryani</li>
              <li>Kathal Biryani</li>
              <li>Egg Biryani</li>
              <li>Chicken Biryani</li>
              <li>Mutton Biryani</li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="menu-slider-container">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={6000}
        >
          <div className="items">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
                alt=""
              />
            </figure>
            <h3>sides</h3>
            <div className="items-name">
              <ul>
                <li>burani raita</li>
                <li>mirchi ka salan</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <figure>
              <img
                src="https://cookingfromheart.com/wp-content/uploads/2021/01/Veg-Tehri-3.jpg"
                alt=""
              />
            </figure>
            <h3>beverages</h3>
            <div className="items-name">
              <ul>
                <li>masala chass</li>
                <li>nanari sherbat</li>
                <li>punjabi lassi</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <figure>
              <img
                src="https://www.spiceupthecurry.com/wp-content/uploads/2022/04/bang-bang-cauliflower-1.jpg"
                alt=""
              />
            </figure>
            <h3>khichadi and more</h3>
            <div className="items-name">
              <ul>
                <li>just khichadi</li>
                <li>lasooni khichadi</li>
                <li>masala veg khichadi</li>
                <li>rajastan achari khichadi</li>
                <li>masala veg khichadi</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <figure>
              <img
                src="https://v2s3z9v2.stackpathcdn.com/videos/2591/20-05-2019/YT_Crispy_Chicken__7L9U4CYS_crop_resize_1024x576.jpg"
                alt=""
              />
            </figure>
            <h3>non veg statters</h3>
            <div className="items-name">
              <ul>
                <li>buhari chicken 65</li>
                <li>crispy chicken nuggts</li>
                <li>butter naan</li>
                <li>mangalorean chicken sukka</li>
              </ul>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
