"use client";

import AareTemperature from "@/components/AareTemperature";
import AirTemperature from "@/components/AirTemperature";
import PersonSwitcher from "@/components/PersonSwitcher";
import Time from "@/components/Time";
import AnimationContext from "@/components/animation/AnimationContext";
import { useState } from "react";
import Birthdays from "@/components/Birthdays";
import Etagenuebersicht from "@/components/Etagenuebersicht";
import DanamemePost from "./DanamemePost";
import DanamemeJoin from "./DanamemeJoin";
import LinesGithub from "./LinesGithub";

export default function GlobalHandler({ data }) {
  const [animation, setAnimation] = useState(null);

  return (
    <>
      <AnimationContext animation={animation} setAnimation={setAnimation} />
      {animation != null && animation}
      <main id="page">
        <div id="background">
          <div
            className={
              "z-50 transition-all duration-500 " +
              (animation != null ? "opacity-0" : "opacity-100")
            }
          >
            <div>
              <h1 className="text-[3rem] font-semibold text-primary leading-10 mt-2">
                Willkommen im
              </h1>
              <h1 className="text-[5.4rem] font-bold text-text">ICT-Campus</h1>
              <Birthdays data={data} />
              <Etagenuebersicht />
            </div>
            <div>
              <Time />
              <PersonSwitcher data={data} />
              <AirTemperature />
              <AareTemperature />
            </div>
            <div>
              <DanamemePost />
              <LinesGithub />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
