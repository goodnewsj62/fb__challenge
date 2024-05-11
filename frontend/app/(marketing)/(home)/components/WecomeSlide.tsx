"use client";

import { Button } from "@/components/ui/button";
import dog from "@/public/images/Christian-Vieler_funny-dogs-catching-food_01-removebg.png";
import friskey from "@/public/images/friskeys-removebg-preview.png";
import pedigree from "@/public/images/pedigree.png";
import Image from "next/image";

const WelcomeSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-secondary relative">
      <div className=" h-full w-[55%] ">
        <div className="px-8 py-5 w-full h-full gap-3 flex flex-col justify-center relative z-10">
          <h1 className="font-bold text-4xl xl:text-5xl ">
            Find Amazing Pet Buddies
          </h1>
          <span className="font-bold">A one stop shop for pets</span>
          <Button size={"lg"} variant={"default"} className="w-fit ">
            Shop now
          </Button>
        </div>

        <Image
          width={230}
          height={230}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom: "-20%",
            // left: "-30px",
          }}
          src={pedigree}
          alt=""
        />
        <Image
          width={230}
          height={230}
          style={{
            position: "absolute",
            zIndex: 0,
            bottom: "-25%",
            left: "100px",
          }}
          src={friskey}
          alt=""
        />
      </div>
      <Image
        width={500}
        height={500}
        style={{
          position: "absolute",
          right: 0,
          bottom: "-5%",
        }}
        src={dog}
        alt=""
      />
    </div>
  );
};

export default WelcomeSlide;
