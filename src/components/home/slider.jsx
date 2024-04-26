"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import "./slider.scss";

const Slider = () => {
  return (
    <Carousel fade className="main-slider">
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <Image
            src={`/images/slider/${slide.image}`}
            alt={slide.title}
            width={1800}
            height={800}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
