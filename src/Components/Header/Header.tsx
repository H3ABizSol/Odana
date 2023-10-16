import "./style.scss";
import logo from "../../assets/odanalogo.png";

export const Header = () => {
  return (
    <header>
      <figure>
        <img src={logo} alt="" />
      </figure>
    </header>
  );
};
