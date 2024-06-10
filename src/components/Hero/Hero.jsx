import "./Hero.css";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero h-[40vh] flex flex-col justify-center items-center text-center md:h-[90vh]">
        <div className="bg-black bg-opacity-70 h-full w-full flex justify-center items-center">
          <div className="container z-0 flex flex-col justify-center items-center gap-10">
            <h1 className="font-secondry  text-4xl  text-zinc-50 md:text-7xl">
              ScubaUs 🤿
            </h1>
            <h2 className="font-sans font-thin text-sm md:text-xl text-zinc-50">
              Professional Instructors, Top-notch Gear, Unmatched Adventure
              Awaits
            </h2>
            <button className="text-[3vw]  bg-black bg-opacity-0 border border-zinc-50 px-[4vw] py-[2vw] text-zinc-50 hover:bg-zinc-50 hover:text-black hover:transiton-all hover:duration-500 md:text-xl md:px-4 md:py-3">
              Make a Divepoinment 🏄🏻‍♂️
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
