import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
import ClientSlider from "../Elements/ClientSlider";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <>
      <Wrapper id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">Get a Maid in your home today</h1>
            <HeaderP className="font22 semiBold">
              We provide maid service and domestic staff, drivers, helpers,
              babysitters, cooks, foreigner staff Filipino, Srilankan, Nigerian
              and medical staff. Finding the right staff to meet your needs.
              karachi, Islamabad & Lahore
            </HeaderP>
            <BtnWrapper>
              <FullButton title="Get Started" />
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img
              className="radius8"
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9 }}
            />
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>
                    Experience the joy of a spotless home without lifting a
                    finger. Our professional maid service ensures every corner
                    is sparkling clean, giving you more time to enjoy what truly
                    matters.
                  </em>
                </p>
                {/* <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p> */}
              </div>
            </QuoteWrapper>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv></GreyDiv>
        </RightSide>
      </Wrapper>
      <div
        style={{
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"#e2fef5"
        }}
      >
        <div className="container">
          <p className="font20" style={{justifyContent:"center",textAlign:"center"}}>
            Looking for a maid service in Karachi, Hiring a maid through us
            means you'll have access to a reliable and trustworthy maid service
            in Karachi, Lahore, and Islamabad. Moreover, our agency carefully
            screens and selects maids who are experienced, professional, and
            efficient. In addition, we understand the importance of finding a
            maid who is the right fit for your home and needs, which is why we
            take the time to match you with a maid who meets your specific
            requirements. Finally, with our service, you can rest assured that
            your home will be in good hands and well taken care of.
          </p>
          <InfoButton>
            <InfoBtnWrapper>
              <FullButton title="Find staff for me" />
            </InfoBtnWrapper>
            <InfoBtnWrapper>
              <FullButton title="Register as worker" />
            </InfoBtnWrapper>
          </InfoButton>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const InfoButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 960px) {
    margin-top: 2%;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const InfoBtnWrapper = styled.div`
  max-width: 190px;
  width:100%;
  @media (max-width: 960px) {
    margin: 0 auto;
    width:100%;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  background-color:#e2fef5;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
