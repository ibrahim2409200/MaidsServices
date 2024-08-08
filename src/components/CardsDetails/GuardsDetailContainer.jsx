// GuardDetailsContainer.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Guard1 from "../../assets/img/Services/guard1.jpg";
import Guard2 from "../../assets/img/Services/guard2.jpg";
import { GiH2O } from "react-icons/gi";

export default function GuardsDetailsContainer() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Guard1, Guard2];

  return (
    <div style={{ maxWidth: "770px", padding: "10px" }}>
      <h2 className="font30 bold">Security Guards Service</h2>
      <br />
      <h2 className="font25 semiBold">Our Services Include</h2>
      <p>
        We offer professional and reliable security guard services to help keep
        your property and assets safe and secure. Our team of experienced and
        skilled security guards is trained to handle a variety of security
        challenges, and we customize our services to meet your specific needs.
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
      <br />
      <ol
        style={{
          textAlign: "left",
          listStyleType: "decimal",
          paddingLeft: "20px",
        }}
      >
        <li>
          <strong>Expertise and experience:</strong> Our security guards are
          highly trained and experienced in security procedures and protocols,
          risk management, and emergency response. They are skilled in
          identifying potential security threats and taking appropriate measures
          to prevent them.
        </li>
        <br/>
        <li>
          <strong>Customized security plans:</strong> We work with you to create
          a customized security plan based on your specific needs and
          requirements. We take into account your property size, type, location,
          and any specific security risks or concerns you may have.
        </li>
        <br/>
        <li>
          <strong>High-quality security equipment:</strong> We use high-quality
          security equipment, such as surveillance cameras, alarms, and access
          control systems, to help detect and prevent security breaches.
        </li>
        <br/>
        <li>
          <strong>Professional and reliable guards:</strong> Our security guards
          are professional, reliable, and dedicated to providing the highest
          level of security services to our clients. They are trained to handle
          any security situation and respond quickly and appropriately in case
          of an emergency.
        </li>
        <br/>
        <li>
          <strong>Affordable pricing:</strong> We offer competitive pricing and
          flexible payment options to fit your budget. We believe that everyone
          should have access to professional and reliable security services, and
          we strive to make our services affordable for everyone.
        </li>
        <br/>
        <li>
          <strong>24/7 availability: </strong> We offer 24/7 security guard
          services to ensure that your property and assets are protected around
          the clock.
        </li>
      </ol>
      <br />
      <p className="font18">
        Overall, we are committed to providing professional and reliable
        security guard services that you can trust and rely on. Contact us today
        to schedule a security guard and start enjoying peace of mind knowing
        that your property and assets are safe and secure.
      </p>
    </div>
  );
}
