import React from "react";
import { NavBar } from "../components/index";
import { SocialNav } from "../components/index";
import { AnimatePresence } from "framer-motion";
import SectionTransition from "../components/frame_components/SectionTransition";
import AnimatedOutlet from "./router/AnimatedOutlet";
// import { BodyPage } from '../components/index';

function App() {
  return (
    <>
      <div className="App flex min-h-[100vh] h-full bg-no-repeat justify-center bg-neutral-900 ">
        <SocialNav />
        <section className="pt-14">
          <AnimatePresence mode="wait">
            <SectionTransition Section={AnimatedOutlet} />
          </AnimatePresence>
        </section>
        <NavBar />
      </div>
    </>
  );
}

export default App;
