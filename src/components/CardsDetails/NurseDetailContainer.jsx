// GuardDetailsContainer.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nurse1 from "../../assets/img/Services/nurse1.jpg";
import Nurse2 from "../../assets/img/Services/nurse2.jpg";

export default function NurseDetailContainer() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Nurse1, Nurse2];

  return (
    <div style={{ maxWidth: "770px", padding: "10px" }}>
      <h2 className="font30 semiBold">Patient Attendant & Nurse Service</h2>
      <br />
      <h2 className="font20 semiBold">Our Services Include</h2>
      <p>
        We provide reliable and professional attendant services and nurse
        services to help individuals and families care for their loved ones.
        <br />
        <br />
        Whether you need help with basic activities of daily living or require
        more advanced medical care, our trained and experienced attendants and
        nurses are here to help.
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
      <br />
      <h2 className="font20 semiBold">
        Here are some reasons why you should choose us:
      </h2>
      <br />
      <ol
        style={{
          textAlign: "left",
          listStyleType: "decimal",
          paddingLeft: "20px",
        }}
      >
        <li>
          <strong>Expertise and Experience:</strong> We have a team of highly
          trained and experienced attendants and nurses who are qualified to
          provide a wide range of services, from personal care and mobility
          assistance to medication management and skilled nursing care.
        </li>
        <br />
        <li>
          <strong>Personalized Care Plans:</strong> We understand that every
          individual has unique needs and preferences, which is why we work with
          you to develop a personalized care plan that is tailored to your
          specific requirements. This ensures that you receive the right level
          of care and support that you need to maintain your health and
          well-being.
        </li>
        <br />
        <li>
          <strong>Affordable Pricing:</strong> We believe that everyone should
          have access to high-quality care, which is why we offer competitive
          pricing and flexible payment options that fit your budget.
        </li>
        <br />
        <li>
          <strong>24/7 Availability:</strong> We are available to provide
          attendant and nurse services 24/7, so you can rest assured that you or
          your loved one is receiving the care and support they need around the
          clock.
        </li>
        <br />
        <li>
          <strong>Compassionate and Caring Staff:</strong> Our attendants and
          nurses are not only highly trained and experienced, but they are also
          compassionate and caring individuals who are dedicated to providing
          the highest level of care and support to our clients.
        </li>
        <br />
      </ol>
      <br />
      <p className="font18">
        Choosing our attendant and nurse services means you are opting for
        quality, reliability, and compassionate care. We are committed to
        providing personalized and professional support tailored to your unique
        needs.
      </p>
    </div>
  );
}
