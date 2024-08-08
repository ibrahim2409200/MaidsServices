import React, { useState } from "react";
import styled from "styled-components";
import WhatsappImg from "../../assets/img/add/whatsapp.png";

export default function ChatButton() {
  const phoneNumbers = [
    { number: "+923482551819", label: "Support" },
    { number: "+923212687791", label: "Sales" },
  ];
  const message = "Hello, I would like to chat with you!"; // Replace with your pre-filled message

  const [position, setPosition] = useState({ x: 1400, y: 650 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (number) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setShowDropdown(false);
  };

  return (
    <>
      <ChatButtonDiv
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ left: position.x, top: position.y }}
        onClick={handleButtonClick}
      >
        <ImgWrapper className="flexCenter">
          <img className="radius8" src={WhatsappImg} alt="add" />
        </ImgWrapper>
        Chat with us
      </ChatButtonDiv>
      {showDropdown && (
        <Dropdown>
          {phoneNumbers.map((phone) => (
            <DropdownItem
              key={phone.number}
              onClick={() => handleDropdownItemClick(phone.number)}
            >
              {phone.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </>
  );
}

const ChatButtonDiv = styled.div`
  position: fixed;
  background-color: #25d366; /* WhatsApp green */
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  z-index: 1000; /* Ensure it's on top */
  user-select: none; /* Prevent text selection while dragging */

  &:hover {
    background-color: #128c7e; /* Darker green on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
const ImgWrapper = styled.div`
  width: 90%;
  padding: 0 15%;
  img {
    width: 60%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  bottom: 60px;
  right: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Ensure it's on top */
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
