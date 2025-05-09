import React, { useState } from "react";
import styled from "styled-components";
import checkedIcon from "../../assets/Sidebar/ckeck_True 1.png";
import uncheckedIcon from "../../assets/Sidebar/check_False.png";
import { AllFemaleData, AllMaleData } from "../../utils/StylestaData";
const CheckboxWithImage = ({ label, checked, onClick }) => {
  return (
    <CheckboxLabel onClick={onClick}>
      <CustomCheckbox checked={checked} />
      <p>{label}</p>
    </CheckboxLabel>
  );
};

export const StylestaSidebar = ({ selectedSection, setSelectedSection }) => {
  return (
    <SidebarContainer>
      <Section>
        <SectionTitle>الأصول الأنثوية</SectionTitle>
        {AllFemaleData.map((item, index) => (
          <CheckboxWithImage
            key={index}
            label={item.title}
            checked={selectedSection === index}
            onClick={() => setSelectedSection(index)}
          />
        ))}
      </Section>
      <Section>
        <SectionTitle>الأصول الذكرية</SectionTitle>
        {AllMaleData.map((item, index) => (
          <CheckboxWithImage
            key={index + 10}
            label={item.title}
            checked={selectedSection === index + 10}
            onClick={() => setSelectedSection(index + 10)}
          />
        ))}
      </Section>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 276px;
  height: 837px;
  display: flex;
  direction: rtl;
  color: #ffffff;
  padding: 42px 32px;
  border-radius: 20px;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(70px);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #a278d1;
  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  //   margin-bottom: 18px;
`;

const CheckboxLabel = styled.div`
  gap: 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  p {
    font-size: 22px;
    margin-bottom: 9px;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
  width: 29px;
  height: 29px;
`;

const CustomCheckbox = styled.span`
  width: 29px;
  height: 29px;
  display: inline-block;
  background-image: ${(props) =>
    props.checked ? `url(${checkedIcon})` : `url(${uncheckedIcon})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
