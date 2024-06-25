import React from "react";
import { Link } from "react-router-dom";


const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
      link: "/birthdayplanning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
      link: "/anniversaryplanning",
    },
    {
      id: 3,
      url: "/corporate.jpg",
      title: "Corporate Events Planning",
      link: "/corporateplanning",
    },
    {
      id: 4,
      url: "/Auction.jpg.webp",
      title: "Non-Profit Events Planning",
      link: "/nonprofitplanning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
      link: "/partyplanning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
      link: "/weddingplanning",
    },
  ];

  return (
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((element) => (
          <div className="item" key={element.id}>
            <Link to={element.link}>
              <h3>{element.title}</h3>
              <img src={element.url} alt={element.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
