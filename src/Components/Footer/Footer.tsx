import {} from "react-router-dom";
import "./Footer.scss";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icon-wrapper">
          <ul>
            <ul>
              <li>
                <a href="tel:+">
                  <BiLogoFacebook size={40} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/odana_noida/?igshid=MzRlODBiNWFlZA%3D%3D">
                  <BiLogoInstagram size={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+919999354269"
                  target="_blank"
                >
                  <BiLogoWhatsapp size={40} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-details">
          {/* <ul>
            <li>veg theri</li>

            <li>veg statters</li>

            <li>non veg statterss</li>

            <li>regionl</li>
          </ul> */}
          {/* <a
            title="View Anav Bedi's food journey on Zomato!"
            href="https://www.zomato.com/users/anav-bedi-37176039"
          >
            <img
              alt="View my food journey on Zomato!"
              src="https://www.zomato.com/widgets/user_widget_img.php?user_id=37176039"
            />
          </a> */}
        </div>
        <div className="copyright">
          <p>© Copyright 2023, all right reserved H3A Business Solutions PVT</p>
        </div>
      </footer>
    </>
  );
};
