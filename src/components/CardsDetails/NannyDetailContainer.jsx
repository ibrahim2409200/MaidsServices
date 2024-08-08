// GuardDetailsContainer.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nanny1 from "../../assets/img/Services/nanny1.jpg";
import Nanny2 from "../../assets/img/Services/nanny2.jpg";
import Nanny3 from "../../assets/img/Services/nanny3.jpg";

export default function NannyDetailContainer() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Nanny1, Nanny2, Nanny3];

  return (
    <div style={{ maxWidth: "770px", padding: "10px" }}>
      <h2 className="font30 semiBold">Nanny Service</h2>
      <br />
      <h2 className="font25 semiBold">Our Services Include</h2>
      <p>
        We provide professional and reliable nanny services to help you take
        care of your children. Our nannies are experienced, trained, and
        equipped to provide high-quality care for children of all ages, from
        infants to teenagers. By hiring a nanny from us, you can have peace of
        mind knowing that your children are in good hands and receiving the
        attention and care they need.<br/><br/> We take the time to understand your
        specific requirements and preferences, and we match you with a nanny who
        is the right fit for your family. With our service, you can enjoy a more
        comfortable and stress-free parenting experience. Contact us today to
        schedule a nanny for your home.
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
          <strong>Rigorous Screening:</strong> Our nannies undergo a rigorous
          screening process to ensure they are reliable, trustworthy, and
          qualified to provide care for children.
        </li>
        <br/>
        <li>
          <strong>Flexible Service Options:</strong> We offer both full-time and
          part-time nanny services, as well as options for live-in or live-out
          nannies.
        </li>
        <br/>
        <li>
          <strong>Comprehensive Care:</strong> Our nannies can provide a wide
          range of services, including childcare, meal preparation,
          transportation, and light housekeeping.
        </li>
        <br/>
        <li>
          <strong>Ongoing Support:</strong> We provide ongoing support and
          communication to ensure that you and your nanny are happy and
          satisfied with the arrangement.
        </li>
        <br/>
        <li>
          <strong>Reputation for Excellence:</strong> Our agency has a track
          record of providing high-quality nanny services and has earned a
          reputation for excellence in the industry.
        </li>
      </ol>
      <br />
      <p className="font18">
        Our comprehensive nanny services are designed to meet your unique needs
        with the highest level of care and professionalism. With a proven track record of
        excellence, our agency stands out as a trusted provider of quality nanny
        services, offering peace of mind and reliability to families.
      </p>
    </div>
  );
}
