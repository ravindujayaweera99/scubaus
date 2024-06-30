import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col px-32 items-center justify-center font-sans md:h-screen">
      <h1 className="mt-10 md:mt-20 text-center font-secondry text-4xl md:text-7xl">
        Our Story
      </h1>
      <div className="flex flex-col  justify-center items-center gap-32 h-full md:flex-row">
        <img src={about} alt="" className="w-[50%] hidden md:block" />
        <div className=" w-screen h-full px-8 py-[5%] text-sm text-justify font-extralight md:w-[50%] mt-10 md:mt-0 md:text-xl">
          <p className="text-sm">
            At ScubaUs, our passion for the underwater world 🌊 drives
            everything we do. Founded by a group of seasoned divers and ocean
            enthusiasts 🧜‍♂️, our mission is to share the beauty and excitement of
            scuba diving 🐠 with adventurers of all levels. Our journey began
            over a decade ago with a simple idea: to create a safe, fun, and
            educational diving experience that everyone can enjoy.
          </p>
          <br />
          <p className="text-sm">
            We started with a small team and a few boats 🚤, offering guided
            dives in some of the most stunning underwater locations 🌺. Today,
            ScubaUs has grown into a leading scuba diving service provider,
            renowned for our expert instructors 🏅, state-of-the-art equipment,
            and dedication to safety. Our commitment to ocean conservation 🌍 is
            at the heart of our operations, and we strive to inspire our guests
            to become stewards of the sea 🌿.
          </p>
          <br />
          <p className="text-sm">
            Join us at ScubaUs and become part of our story. Dive into adventure
            🏊, discover breathtaking marine life 🐢, and create memories that
            will last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
