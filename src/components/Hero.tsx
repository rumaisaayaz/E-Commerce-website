import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero container mx-auto px-4 py-16 md:py-24 text-white min-h-screen bg-cover bg-center rounded-bl-[48px]"
    style={{ backgroundImage: "url('/bg-pic.png')" }}
    >
      <div
        className=""
       
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-[557px] ml-[70px] space-y-4 md:space-y-6">
            <span className="text-sm font-medium uppercase tracking-wide text-[#272343]">
              Welcome to chairy
            </span>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#272343] leading-tight">
              Best Furniture Collection For Your Interior.
            </h1>
            <div className="pt-4">
              <button className="inline-flex items-center px-6 py-3.5 bg-[#029FAE] text-white rounded hover:bg-[#029FAE]/90 transition-colors">
                Shop Now
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-auto">
            <Image
              src="/hero-img.png"
              alt="Modern chair"
              width={434}
              height={584}
              className="w-full top-[115px] md:w-[434px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
