// GuardDetailsContainer.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cook1 from "../../assets/img/Services/cook1.jpg";
import Cook2 from "../../assets/img/Services/cook2.jpg";

export default function CookDetailContainer() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Cook1, Cook2];

  return (
    <div style={{ maxWidth: "770px", padding: "10px" }}>
      <h2 className="font30 semiBold">Cooking Service</h2>
      <br />
      <h2 className="font25 semiBold">Our Services Include</h2>
      <p>
        We offer professional and reliable cook services to help you enjoy
        delicious and healthy meals in the comfort of your own home.
        <br /><br/> Whether you’re a busy professional who doesn’t have time to cook,
        or you’re looking to enjoy restaurant-quality meals at home, our team of
        experienced and skilled cooks is here to help.
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
          <strong>Expertise and Experience:</strong> Our cooks are highly
          trained and experienced in a variety of cuisines and cooking styles.
          They can prepare healthy and delicious meals that are tailored to your
          taste preferences and dietary needs.
        </li>
        <br />
        <li>
          <strong>Customized Menus:</strong> We work with you to create a
          customized menu based on your taste preferences, dietary requirements,
          and any food allergies or restrictions.
        </li>
        <br />
        <li>
          <strong>Convenient Scheduling:</strong> We offer flexible scheduling
          to accommodate your busy lifestyle. Whether you need a cook to prepare
          meals daily or weekly, we can create a schedule that works for you.
        </li>
        <br />
        <li>
          <strong>Affordability:</strong> We offer competitive pricing and
          flexible payment options to fit your budget. We believe that everyone
          should have access to healthy and delicious meals, and we strive to
          make our services affordable for everyone.
        </li>
        <br />
        <li>
          <strong>Quality Ingredients:</strong> We use only the freshest and
          highest quality ingredients to prepare your meals, ensuring that you
          are getting the best possible flavors and nutrition.
        </li>
        <br />
        <li>
          <strong>Clean and Hygienic Cooking:</strong> Our cooks maintain strict
          standards of cleanliness and hygiene when preparing your meals,
          ensuring that your food is safe and healthy to eat.
        </li>
      </ol>
      <br />
      <p className="font18">
        Overall, we are committed to providing professional and reliable cook
        services that you can trust and rely on. Contact us today to schedule a
        cook for your home and start enjoying delicious, healthy meals without
        the hassle of cooking.
      </p>
    </div>
  );
}
