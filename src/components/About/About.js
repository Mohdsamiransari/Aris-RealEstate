import React from "react";
import AboutBg from "../../assets/AboutBg.jpg";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";


export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const ourValues = [
    {
      id: 1,
      title: "Quality",
      content:
        "When it comes to my approach in dealing with real estate, We pride ourself on delivering exceptional service and prioritizing my clients' needs above all else. With a deep understanding of the real estate market and years of experience, We bring a wealth of knowledge to every transaction.",
    },
    {
      id: 2,
      title: "Teamwork",
      content:
        "At Aris, our team's philosophy revolves around building long-term relationships based on trust, integrity, and personalized service. We understand that every client has unique needs and aspirations, and we are here to listen, guide, and advocate for you throughout the entire process.",
    },
    {
      id: 3,
      title: "Innovative",
      content:
        "Innovation in the real estate industry has revolutionized the way properties are bought, sold, and managed. Virtual reality property tours to drone photography for capturing stunning aerial views, real estate has embraced innovative technologies to enhance the buying and selling experience for both agents and clients.",
    },
    {
      id: 4,
      title: "Respect",
      content:
        "Respectful collaboration is key in real estate transactions. Real estate professionals work alongside clients, fellow agents, lenders, and other industry stakeholders with respect, recognizing the shared goal of achieving successful outcomes for all parties involved.",
    },
    {
      id: 5,
      title: "Trust",
      content:
        "Our team of experienced real estate professionals is dedicated to building lasting relationships based on trust, integrity, and open communication. We believe that trust is earned through consistent delivery of exceptional service, honest advice, and a commitment to acting in our clients' best interests.",
    },
    {
      id: 6,
      title: "Gratitude",
      content:
        "Gratitude is at the heart of our real estate business. We are immensely thankful for the trust our clients place in us as their partners in their real estate journey. We are grateful for the opportunity to guide them through the process of finding their dream homes or making sound investments.",
    },
  ];

  const content = ourValues.map((i) => (
    <div className=" h-fit">
      <h1 className="text-3xl font-semibold mb-3">{i.title}</h1>
      <p>{i.content}</p>
    </div>
  ));
  return (
    <div className=" font-sans ">
      <Helmet>
        <title>Aris - About</title>
      </Helmet>
      <div
        className="w-full h-[80vh] max-sm:h-[50vh] bg-cover flex flex-col items-start justify-center  text-white  "
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <h1 className={`text-5xl ml-8 font-semibold `}>About Us</h1>
      </div>

      <div className="w-full h-[50vh] max-lg:h-fit mt-32 ">
        <div className="bg-black w-28 h-1 mx-auto mt-10"></div>
        <h1
          ref={ref}
          className={`text-4xl font-semibold mx-auto text-center mt-5 w-10/12 text-[#1a1a1a] transition-all duration-1000 ${
            inView ? "translate-y-0 " : "translate-y-10 opacity-0"
          }`}
        >
          We have been building houses for over 5 years
        </h1>
        <div
          className={`grid grid-cols-2 max-sm:grid-cols-1 gap-10  w-10/12 mx-auto mt-10 transition-all duration-1000 ${
            inView ? "translate-x-0 " : "-translate-x-10 opacity-0"
          }`}
        >
          <p>
            Welcome to our real estate agency! At Aris, we are dedicated to
            providing exceptional real estate services tailored to your unique
            needs. With years of experience in the industry, our team of expert
            agents is committed to guiding you through every step of your real
            estate journey.
            <br />
            Our team of passionate professionals is well-versed in the local
            market, staying up-to-date with the latest trends and developments.
            We take the time to listen to your needs, understand your goals, and
            work tirelessly to help you achieve them.
          </p>
          <p>
            At Aris, integrity, transparency, and trust are the cornerstones of
            our business. We believe in building lasting relationships with our
            clients, founded on open communication and honesty. Your
            satisfaction is our ultimate priority, and we go the extra mile to
            ensure a seamless and successful real estate experience. <br />{" "}
            Whether you're looking to find your dream home, sell your property
            at the best possible price, or explore investment opportunities, we
            are here to turn your real estate goals into reality. Get in touch
            with our team today and let us help you make your next move with
            confidence.
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto h-[90vh] max-sm:h-fit max-lg:h-fit max-lg:mt-8">
        <h1
          className={`text-4xl font-semibold text-center h-24 text-[#1a1a1a] transition-all duration-1000 ${
            inView ? "translate-y-10 opacity-0" : "-translate-y-10 opacity-1"
          }`}
        >
          Our Values
        </h1>
        <div
          className={`grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 w-11/12  mx-auto gap-x-10 gap-y-14 transition-all duration-1000 ${
            inView ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-1"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
