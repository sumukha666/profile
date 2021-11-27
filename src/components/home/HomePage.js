import React from "react";
import images from "../images";
import CommonCard from "../common/card/Card";

const HomePage = () => {
  const cardDetails = [
    {
      name: 1,
      imgSrc: images.landingImg,
      imgAlt: "construction",
      isImgReq: true,
      cardHeader: "Constructions",
    },
    {
      name: 2,
      imgSrc: images.landingImg,
      imgAlt: "construction",
      isImgReq: true,
      cardHeader: "Constructions",
    },
    {
      name: 3,
      imgSrc: images.landingImg,
      imgAlt: "construction",
      isImgReq: true,
      cardHeader: "Constructions",
    },
    {
      name: 4,
      imgSrc: images.landingImg,
      imgAlt: "construction",
      isImgReq: true,
      cardHeader: "Constructions",
    },
    {
      name: 5,
      imgSrc: images.landingImg,
      imgAlt: "construction",
      isImgReq: true,
      cardHeader: "Constructions",
    },
    {
      name: 6,
      imgSrc: images.landingImg,
      imgAlt: "construction",
      isImgReq: true,
      cardHeader: "Constructions",
    },
  ];

  return (
    <>
      <div>
        <img
          src={images.landingImg}
          alt="construction"
          className="width-100-per height-fit-content"
        ></img>
      </div>
      <div className="dsp-flex overflow-scroll-x justify-content-sp-btw mr-1rem">
        {cardDetails.map((card) => (
          <CommonCard
            key={card.name}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            isImgReq={card.isImgReq}
            cardHeader={card.cardHeader}
            className="mr-1rem"
          />
        ))}
      </div>
    </>
  );
};
export default HomePage;
