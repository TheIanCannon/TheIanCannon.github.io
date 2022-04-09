import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

import bunker from "../media/av/bunker.mp4";
import balance from "../media/av/balance.mp4";
import worms from "../media/av/worms.mp4";
import tightrope from "../media/av/tightrope.mp4";
import sardines from "../media/av/sardines.mp4";
import tracheotomy from "../media/av/tracheotomy.mp4";
import mountain from "../media/av/mountain.mp4";
import bear from "../media/av/bear.mp4";
import croc from "../media/av/croc.mp4";
import tuna from "../media/av/tuna.mp4";

export default function VideoCarousel() {
  const voSamples = [
    {
      id: 0,
      title: "Stock a Bunker!",
      src: bunker,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 1,
      title: "Balance a Bike Wheel!",
      src: balance,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 2,
      title: "Buzz Worms for Bait!",
      src: worms,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 3,
      title: "Ride On a Tightrope!",
      src: tightrope,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 4,
      title: "Survive with Sardines!",
      src: sardines,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 5,
      title: "DIY Tracheotomy!",
      src: tracheotomy,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 6,
      title: "Scare Off a Mountain Lion!",
      src: mountain,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 7,
      title: "Survive a Bear Attack!",
      src: bear,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 8,
      title: "What a Croc!",
      src: croc,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    },
    {
      id: 9,
      title: "Gaff a Tuna!",
      src: tuna,
      credit: "2012 I. Cannon/G. Ferreyra/Weldon Owen"
    }
  ];

  return (
    <div className="VideoCarousel">
      <Carousel>
        {voSamples.map((vo) => {
          return (
            <Carousel.Item key={vo.id}>
              <h6 className="voInfo">{vo.title}</h6>
              <ReactPlayer url={vo.src} controls={true} playing={false} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
