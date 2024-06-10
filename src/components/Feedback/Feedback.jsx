import Marquee from "react-fast-marquee";
import emily from "../../assets/emily.jpg";
import james from "../../assets/james.jpg";
import sarah from "../../assets/sarah.jpg";
import micheal from "../../assets/micheal.jpg";
import linda from "../../assets/linda.jpg";
import david from "../../assets/david.jpg";
import alice from "../../assets/alice.jpg";
import robert from "../../assets/robert.jpg";
import jesicca from "../../assets/jesicca.jpg";
import tom from "../../assets/tom.jpg";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      img: emily,
      name: "Emily R.",
      comment:
        "ScubaUs made my first diving experience unforgettable. The instructors were patient, knowledgeable, and made me feel completely safe underwater. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      img: james,
      name: "James L.",
      comment:
        "I've dived with several companies before, but ScubaUs is by far the best. Their attention to detail and commitment to safety is unmatched. I'll definitely be back!",
      rating: 5,
    },
    {
      id: 3,
      img: sarah,
      name: "Sarah M.",
      comment:
        "The best dive shop around! The team at ScubaUs is fantastic, the gear is top-notch, and the dive sites are incredible. A perfect experience from start to finish.",
      rating: 5,
    },
    {
      id: 4,
      img: micheal,
      name: "Michael T.",
      comment:
        "ScubaUs offers an amazing balance of professionalism and fun. The dives were well-organized, and the staff's passion for marine life really shines through. Can't wait for my next dive!",
      rating: 5,
    },
    {
      id: 5,
      img: linda,
      name: "Linda K.",
      comment:
        "From the moment I booked until the end of the dive, everything was perfect. The team at ScubaUs is exceptional, and the underwater scenery was breathtaking.",
      rating: 5,
    },
    {
      id: 6,
      img: david,
      name: "David P.",
      comment:
        "Absolutely loved my experience with ScubaUs! The instructors are top-notch, and the dive sites are some of the best I've ever seen. Highly recommended.",
      rating: 5,
    },
    {
      id: 7,
      img: alice,
      name: "Alice W.",
      comment:
        "ScubaUs provided an excellent diving experience. The staff is friendly and knowledgeable, and the equipment is in great condition. I'll be back for more dives soon!",
      rating: 5,
    },
    {
      id: 8,
      img: robert,
      name: "Robert B.",
      comment:
        "A fantastic diving experience! The guides were professional and very attentive. ScubaUs truly cares about their customers and the marine environment.",
      rating: 5,
    },
    {
      id: 9,
      img: jesicca,
      name: "Jessica H.",
      comment:
        "Had an amazing time diving with ScubaUs! The team is highly skilled, and they made sure we had a safe and enjoyable experience. Can't wait to dive with them again.",
      rating: 5,
    },
    {
      id: 10,
      img: tom,
      name: "Tom S.",
      comment:
        "ScubaUs exceeded my expectations in every way. The dives were well-organized, and the instructors were incredibly helpful. It was an unforgettable adventure!",
      rating: 5,
    },
  ];

  return (
    <div className="h-[30vh] flex justify-center items-center overflow-y-hidden gap-10 overflow-x-hidden mt-10 md:mt-0">
      <Marquee>
        {feedbacks.map((f) => (
          <div
            key={f.id}
            className=" w-[90vw] h-[25vh] border border-gray-300 flex flex-col gap-3 justify-center items-center p-5 mx-10 md:w-[30vw]"
          >
            <img
              src={f.img}
              alt=""
              className="w-8 h-8 rounded-full md:w-12 md:h-12 aspect-auto"
            />
            <h1 className="text-[4vw] font-sans md:text-[1vw]">{f.name}</h1>
            <p className="text-[3vw] font-sans font-thin md:text-[1vw]">
              {f.comment}
            </p>
            <h3 className="font-secondary flex text-[3vw] md:text-[1vw]">
              {"⭐️".repeat(f.rating)}
            </h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Feedback;
