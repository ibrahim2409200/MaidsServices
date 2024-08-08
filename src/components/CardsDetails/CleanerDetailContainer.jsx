// GuardDetailsContainer.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cleaner1 from "../../assets/img/Services/cleaner1.jpg";
import Cleaner2 from "../../assets/img/Services/cleaner2.jpg";

export default function CleanerDetailContainer() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Cleaner1, Cleaner2];

  return (
    <div style={{ maxWidth: "770px", padding: "10px" }}>
      <h2 className="font30 semiBold">House Cleaning Service</h2>
      <br/>
      <h2 className="font25 semiBold">Our Services Include</h2>
      <p>
        Hiring a maid through us means you’ll have access to a reliable and
        trustworthy service. Our agency carefully screens and selects maids who
        are experienced, professional, and efficient.<br/><br/> We understand the
        importance of finding a maid who is the right fit for your home and
        needs, which is why we take the time to match you with a maid who meets
        your specific requirements. With our service, you can rest assured that
        your home will be in good hands and well taken care of.
      </p>
      <br/>
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
          <strong>Flexible Service Options:</strong> Our maid service offers a
          flexible range of options to suit your specific needs, whether you
          require weekly, monthly, part-time, or full-time maid service. We
          understand that everyone’s schedule and cleaning needs are unique,
          which is why we offer customizable plans to fit your lifestyle and
          budget.
        </li>
        <br/>
        <li>
          <strong>Experienced and Trained Staff:</strong> Our team of maids are
          highly experienced and professionally trained, ensuring that your home
          is cleaned to the highest standard and in a timely manner. We also
          conduct background checks and reference verifications to ensure that
          our maids are reliable and trustworthy.
        </li>
        <br/>
        <li>
          <strong>Commitment to Communication and Transparency:</strong> At our
          maid service, we prioritize communication and transparency to ensure
          that our clients are always satisfied with our service. We strive to
          build long-lasting relationships with our clients and work closely
          with you to ensure that we meet and exceed your expectations.
        </li>
        <br/>
        <li>
          <strong>Peace of Mind:</strong> By choosing our maid service, you can
          enjoy a clean and comfortable home without the stress of having to do
          it yourself. Let us take care of the cleaning so you can focus on the
          things that matter most to you.
        </li>
      </ol>
      <br />
      <p className="font18">
        By choosing our maid service, you are opting for flexibility, expertise,
        and a commitment to excellence.Our customizable plans ensure your
        specific needs are met, while our experienced and trustworthy staff
        deliver top-quality cleaning services.
      </p>
    </div>
  );
}
