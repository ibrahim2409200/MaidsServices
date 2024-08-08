import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import { Link } from "react-scroll";
// Components
import GuardsDetailsContainer from "../CardsDetails/GuardsDetailContainer";
import NannyDetailContainer from "../CardsDetails/NannyDetailContainer";
import Card from "../Elements/Card";

// Assets
import Guard from "../../assets/icons/guard.png";
import Map from "../../assets/icons/map.png"
import Phone from "../../assets/icons/phone.png"
import Nurse from "../../assets/icons/nurse.png";
import Driver from "../../assets/icons/driver.png";
import Nanny from "../../assets/icons/nanny.png";
import AddCook from "../../assets/icons/cook.png";
import Cleaner from "../../assets/icons/cleaner.png";
import CleanerDetailContainer from "../CardsDetails/CleanerDetailContainer";
import NurseDetailContainer from "../CardsDetails/NurseDetailContainer";
import CookDetailContainer from "../CardsDetails/CookDetailContainer";
import DriverDetailContainer from "../CardsDetails/DriverDetailContainer";

export default function Services() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, setLoading] = useState(false);

  const cards = [
    { id: 1, img: AddCook, title: "Cooking" },
    { id: 2, img: Nanny, title: "Nanny" },
    { id: 3, img: Driver, title: "Driver" },
    { id: 4, img: Cleaner, title: "Cleaner" },
    { id: 5, img: Nurse, title: "Nurse" },
    { id: 6, img: Guard, title: "Guards" },
  ];

  const handleCardClick = (id) => {
    setLoading(true);
    setSelectedCard(id);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  const cardsId = cards.find((card) => card.id === selectedCard);
  
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo style={{ }}>
            <h1 style={{ marginLeft:"3%"}} className="font40 extraBold">
              Our Awesome Services
            </h1>
            <p className="font20" style={{maxWidth:"900px",marginLeft:"3%"}}>
              Enjoy top-quality home care with our reliable and professional
              maids. Our services ensure your home is always clean and
              well-maintained in Karachi, Lahore, and Islamabad.
              <br />
            </p>
          </HeaderInfo>
          <ServicesWrapper>
            {selectedCard === null ? (
              <ServiceBoxWrap>
                <CardsRow>
                  {cards.map((card) => (
                     <Link
                     to="services"
                   >
                    <Card
                      key={card.id}
                      img={card.img}
                      title={card.title}
                      onClick={() => handleCardClick(card.id)}
                    />
                    </Link>
                  ))}
                </CardsRow>
              </ServiceBoxWrap>
            ) : (
              <ServiceBoxWrap>
                {loading && (
                  <LoaderWrapper>
                    <FaSpinner className="spinner" />
                  </LoaderWrapper>
                )}
                {!loading && (
                  <CardAndTabsWrapper>
                    <CardDetails isVisible={selectedCard !== null}>
                      <BackIcon onClick={() => setSelectedCard(null)}>
                        <FaArrowLeft />
                      </BackIcon>
                      {cardsId.id === 1 ? (<CookDetailContainer/> ):              
                      cardsId.id === 2 ? (<NannyDetailContainer /> ):
                      cardsId.id === 3 ? (<DriverDetailContainer/> ):
                      cardsId.id === 4 ? (<CleanerDetailContainer/> ):
                      cardsId.id === 5 ? (<NurseDetailContainer/> ):
                      cardsId.id === 6 ? (<GuardsDetailsContainer />) : null}
                    </CardDetails>
                    <TabsColumn>
                      <TabsContainer>
                        <h2 className="font25 semiBold">OUR SERVICES</h2>
                        {cards.map((card) => (
                          <Link
                          to="services"
                        >
                          <Tab
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            active={card.id === selectedCard}
                            hidden={card.id === selectedCard}
                          >
                            
                            {card.title}
                          </Tab>
                          </Link>
                        ))}
                      </TabsContainer>
                      <EmptyContainer>
                        <ImageWrapper>
                          <Image src={Map}/>          
                        </ImageWrapper>
                        
                        <p style={{textAlign:"center"}}>ABC Street, Block 10, Karachi.</p>   
                      </EmptyContainer>
                      <EmptyContainer>
                      <ImageWrapper>
                          <Image src={Phone}/>          
                        </ImageWrapper>
                        
                        <p style={{textAlign:"center"}}>Call us at 090078601</p>   
                      </EmptyContainer>
                    </TabsColumn>
                  </CardAndTabsWrapper>
                )}
              </ServiceBoxWrap>
            )}
          </ServicesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #e0f7fa;
  margin: 0 auto 10px auto;
  flex-direction:column;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100px;
  height: auto;
`;


const Wrapper = styled.section`
  width: 100%;
`;

const ServicesWrapper = styled.div`
  padding: 20px;
`;

const ServiceBoxWrap = styled.div`
  background-color: #e2fef5;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  /* Set a fixed size or use a min-height to ensure consistent size */
  min-height: 400px; /* Adjust as needed */
   @media (max-width: 768px) {
   padding: 10px;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .spinner {
    font-size: 24px;
    color: #2fb8a7;
    animation: ${spin} 1s linear infinite;
  }
`;

const BackIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #2fb8a7;

  &:hover {
    color: #68dbab;
  }
`;

const CardAndTabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content:center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TabsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    order: 2; /* Ensure tabs appear below card details on mobile */
  }
`;

const TabsContainer = styled.div`
  padding:10px;
  border-radius: 20px;
  text-align:center;

  @media (max-width: 768px) {
    order: 2; /* Ensure tabs appear below card details on mobile */
    padding: 40px;
  }
`;

const EmptyContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Tab = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 10px 50px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  background-color: ${({ active }) =>
    active
      ? "linear-gradient(119.49deg, #68dbab 3.02%, #2fb8a7 111.32%)"
      : "#ffffff"};
  border-radius: 30px;
  color: #0c6284;
  flex-shrink: 0;
  margin-bottom:3%;

  &:hover {
    background: linear-gradient(119.49deg, #68dbab 3.02%, #2fb8a7 111.32%);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: ${({ hidden }) => (hidden ? "none" : "block")};
  }
`;

const CardDetails = styled.div`
  padding: 20px;
  width: 75%;
  background-color: white;
  border-radius: 20px;
  

  @media (max-width: 768px) {
    width: 100%;
    order: 1; /* Ensure card details appear above tabs on mobile */
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
