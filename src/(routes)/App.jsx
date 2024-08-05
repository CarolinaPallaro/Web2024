import React from "react";
import { NavBar } from "../components/index";
import { SocialNav } from "../components/index";
import AnimatedOutlet from "./router/AnimatedOutlet";

function App() {
  return (
    <>
      <div className="App flex min-h-[100vh] h-full bg-no-repeat justify-center bg-neutral-900 ">
        <SocialNav />
        <section className="pt-10">
         
           
              <AnimatedOutlet />
           
         
        </section>
        <NavBar />
      </div>
    </>
  );
}

export default App;
