import React from "react";
import styled from "styled-components";
import threeDWeapons from "../assets/threeDWeapons/threeDWeapons.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 44px;

  img {
    width: 100%;
    max-width: 1200px; /* أقصى عرض على الشاشات الكبيرة */
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 100%;
    }
  }
`;

const Imagee = () => {
  return (
    <Wrapper>
      <img src={threeDWeapons} alt="3D Weapons" />
    </Wrapper>
  );
};

export default Imagee;
