import React from "react";
import Header from "../components/Header";

const Home = () => {
  const title = "Welcome on Boards";
  const moreInfo = {
    subText:
      "We are into creating beautiful and mobile responsive web applications",
    ctaText: "Read More",
    buttonClick: (name, e) => {
      console.log(e.type);
      alert("I have been clicked by " + name);
    },
  };
  return (
    <div>
      <Header text={title} moreInfo={moreInfo} />
      Home
    </div>
  );
};

export default Home;
