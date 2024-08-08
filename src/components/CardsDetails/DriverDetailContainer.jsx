// GuardDetailsContainer.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Driver1 from "../../assets/img/Services/driver1.jpg";
import Driver2 from "../../assets/img/Services/driver2.jpg";

export default function DriverDetailContainer() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Driver1, Driver2];

  return (
    <div style={{ maxWidth: "770px", padding: "10px" }}>
      <h2 className="font30 semiBold">Driving Service</h2>
      <br />
      <h2 className="font25 semiBold">Our Services Include</h2>
      <p>
        We offer reliable and professional driver services to help you get to
        your destination safely and on time. Whether you need a driver for a
        one-time event or for ongoing transportation needs, our team of
        experienced and skilled drivers is here to help.
      </p>
      <br />
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide ${index}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
      <br/>
      <h2 className="font20 semiBold">
        Here are some reasons why you should choose us:
      </h2>
      <br/>
      <ol
        style={{
          textAlign: "left",
          listStyleType: "decimal",
          paddingLeft: "20px",
        }}
      >
        <li>
          <strong>Expertise and Experience:</strong> Our drivers are highly
          trained and experienced in safe driving practices, defensive driving
          techniques, and navigating different routes and traffic conditions.
          They can help you get to your destination quickly and safely.
        </li>
        <br/>
        <li>
          <strong>Safe and Well-Maintained Vehicles:</strong> We maintain a
          fleet of well-maintained and reliable vehicles that are equipped with
          the latest safety features and amenities to ensure a comfortable and
          safe ride.
        </li><br/>
        <li>
          <strong>Convenient Scheduling:</strong> We offer flexible scheduling
          to accommodate your transportation needs. Whether you need a driver
          for a one-time event or for ongoing transportation needs, we can
          create a schedule that works for you.
        </li><br/>
        <li>
          <strong>Affordable Pricing:</strong> We offer competitive pricing and
          flexible payment options to fit your budget. We believe that everyone
          should have access to reliable and safe transportation, and we strive
          to make our services affordable for everyone.
        </li><br/>
        <li>
          <strong>Professional and Courteous Drivers:</strong> Our drivers are
          not only skilled and experienced, but they are also professional and
          courteous individuals who are dedicated to providing the highest level
          of service to our clients.
        </li><br/>
        <li>
          <strong>24/7 Availability:</strong> We are available to provide driver
          services 24/7, so you can rest assured that you can get to your
          destination at any time.
        </li>
      </ol>
      <br />
      <p className="font18">
        Overall, we are committed to providing reliable and professional driver
        services that you can trust and rely on. Contact us today to schedule a
        driver and start enjoying safe and comfortable transportation to your
        destination.
      </p>
    </div>
  );
}
