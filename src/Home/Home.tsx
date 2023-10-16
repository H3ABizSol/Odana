import { Layout } from "../Layout/Layout";
import { Menu } from "./components/Menu/Menu";
import { Slider } from "./components/Slidercarasouel/slider";
import { Contact } from "./components/contact/Contact";

export const Home = () => {
  return (
    <Layout>
      <Slider />
      <Menu />
      <Contact />
    </Layout>
  );
};
