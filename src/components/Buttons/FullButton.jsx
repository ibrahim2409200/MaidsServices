import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#2fb8a7")};
  background-color: ${(props) => (props.border ? "transparent" : "#2fb8a7")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#0c6284")};
    border: 1px solid #2fb8a7;
    color: ${(props) => (props.border ? "#2fb8a7" : "#fff")};
  }
`;

