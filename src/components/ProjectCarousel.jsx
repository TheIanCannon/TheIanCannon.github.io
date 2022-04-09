import "./ProjectCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import GiveYourAll from "../media/img/GiveYourAll.png";
import OneArmedBandit from "../media/img/OneArmedBandit.png";
import Palanthas from "../media/img/Palanthas.png";
import IntoInfinity from "../media/img/IntoInfinity.png";
import ShipCollector from "../media/img/ShipCollector.png";
import MoneyPal from "../media/img/MoneyPal.png";

export default function ProjectCarousel() {
  const projectList = [
    {
      id: 0,
      title: "One-Armed Bandit",
      src: OneArmedBandit,
      url: "http://theiancannon.github.io/GA-Project1-SlotMachine/",
      desc:
        "An HTML/CSS/JS-based slot machine with animated *.gif reels and contextual sound effects."
    },
    {
      id: 1,
      title: "Palanthas",
      src: Palanthas,
      url: "http://project-palanthas.herokuapp.com/",
      desc:
        "Developed in MongoDB/Express/Node for collecting, reviewing, and rating books."
    },
    {
      id: 2,
      title: "Ship Collector",
      src: ShipCollector,
      url: "http://shipcollector.herokuapp.com/",
      desc:
        "Created using Python/Django as a fan project based on The Expanse sci-fi series, this is halfway between sci-fi harbormaster monitoring software and a narrative tracking tool."
    },
    {
      id: 3,
      title: "Into Infinity!",
      src: IntoInfinity,
      url: "http://intoinfinity.herokuapp.com/",
      desc:
        "This space-exploration and teaching app was built with Python/Django. Its categories are sized to the Solar System, but scalable beyond, and tracks missions and objects in space."
    },
    {
      id: 4,
      title: "Give Your All",
      src: GiveYourAll,
      url: "http://giveyourall.herokuapp.com/",
      desc:
        "Developed out of a personal interest in charity, this app searches an API for charity data and totals up orders for donation amounts; such a design could conceivably handle/anonymize donations through Stripe or similar software"
    },
    {
      id: 5,
      title: "Money Pal",
      src: MoneyPal,
      url: "https://pensive-goodall-ea0925.netlify.app/",
      desc:
        "Coded in a February 2022 Hackathon with a team of UX/UI designers and fellow engineers, Money Pal offers advice on a user's finances—and preserves anonymity by way of a front-end-only design."
    }
  ];

  return (
    <div className="ProjectCarousel">
      <Carousel>
        {projectList.map((p) => {
          return (
            <Carousel.Item key={p.id}>
              <h6 className="pTitle">{p.title}</h6>
              <img className="projectImg" src={p.src} alt="{p.src}" />
              <h6 className="urlDesc">
                <a href={p.url}>{p.desc}</a>
              </h6>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
