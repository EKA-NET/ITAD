import { About } from "../components/About";
import { Intro } from "../components/Intro";
import { Register } from "../components/Register";
import '../App.scss'
import { Constants } from "../constants";

export const Home = () => {
  return (
    <>
      <main>
        <title>{Constants.SITE_NAME}</title>
        <Intro />
        <About />
        <Register />
      </main>
    </>
  );
}