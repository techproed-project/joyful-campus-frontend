import React from "react";
import events from "../../helpers/data/events.json";
import { Container } from "react-bootstrap";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "./upcoming-events.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EventCard from "../events/event-card";

// Event tarihleri ile mevcut sistem tarihini karşılaştırıp, gelecek tarihli event leri filtreliyoruz
const upcomingEvents = events.filter(
  (item) => new Date(item.date) > new Date()
);

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <Container>
        <h2>
          <div className="prev">
            <FaChevronCircleLeft />
          </div>
          <div>Upcoming Events</div>
          <div className="next">
            <FaChevronCircleRight />
          </div>
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {upcomingEvents.map((item) => (
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
