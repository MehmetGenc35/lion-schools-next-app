"use client";
import SectionTitle from "../common/section-title";
import { Container } from "react-bootstrap";
import events from "@/helpers/data/events.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./upcoming-events.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import EventCard from "./event-card";

const upComingEvents = events.filter(
  (item) => new Date(item.date) >= new Date()
);


const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <Container>
        <div className="title">
          <span>
            <FaChevronLeft className="prew" />
          </span>
          <SectionTitle>Upcoming Events</SectionTitle>
          <span>
            <FaChevronRight className="next" />
          </span>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: ".prew",
            nextEl: ".next",
          }}
        >
          {upComingEvents.map((item) => (
            <SwiperSlide key={item.id}>
              <EventCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
