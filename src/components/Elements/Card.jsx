import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';


export default function Card({ img, title, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <CardWrapper ref={ref} className={isVisible ? 'in-view' : ''}>
      <ImageWrapper>
        <Image src={img} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <ArrowButton onClick={onClick}>
        <FaChevronDown size={20} />
      </ArrowButton>
    </CardWrapper>
  );
}


const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardWrapper = styled.div`
  border: 3px solid #ffff;
  padding: 70px;
  text-align: center;
  flex: 1 1 calc(33.333% - 40px);
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #ffffff;
  color: #2fb8a7;
  transition: background-color 0.3s, color 0.3s;
  opacity: 0;
  transform: translateY(20px);
  &.in-view {
    animation: ${slideInFromBottom} 0.5s forwards;
  }

  &:hover {
    background: linear-gradient(119.49deg, #68dbab 3.02%, #2fb8a7 111.32%);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
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
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 70px;
  height: auto;
`;

const Title = styled.h2`
  margin: 10px 0;
  color: #0c6284;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ArrowButton = styled.button`
  margin-top: 20px;
  margin-left:22%;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  background: #e2fef5;
  color: #2fb8a7;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background: #ffffff;
    color: #2fb8a7;
    transform: scale(1.1);
  }

`;
