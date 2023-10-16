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
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/khichdi-recipe.jpg"
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
              src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_649541308_20191010160155.png"
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
              src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"
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
                src="https://www.foodandwine.com/thmb/fXGHiEv_cKMYfZvUMPoq_uQWRG0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Smoky-Sweet-Potatoes-With-Chorizo-Butter-FT-RECIPE1121-155da84b9f5349cbada35159ee8addef.jpg"
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
                src="https://www.cactuslanguage.com/wp-content/uploads/2022/08/drinks-around-the-world.jpg"
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
                src="https://www.flavourstreat.com/wp-content/uploads/2020/08/dal-khichdi-recipe-05.jpg"
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
                src="https://assets.zeezest.com/images/PROD_A_1664167434483.jpg"
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
