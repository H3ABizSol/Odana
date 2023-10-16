import "./style.scss";
import logo from "../../assets/odanalogo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <figure>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </figure>
    </header>
  );
};
