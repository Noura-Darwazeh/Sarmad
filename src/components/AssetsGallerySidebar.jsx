import React, { useState } from "react";
import styled from "styled-components";
import sidebar from "../assets/Sidebar/Glass.png";
import checkedIcon from "../assets/Sidebar/ckeck_True 1.png";

// ==== Styled Components ====

const FilterContainer = styled.div`
  width: 200px;
  padding: 40px 20px;
  background-image: url(${sidebar});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  direction: rtl;
  color: #ffffff;
`;

const Section = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid #a278d1;
  padding-bottom: 12px;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 18px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CustomCheckbox = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  background-image: ${(props) => (props.checked ? `url(${checkedIcon})` : "none")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid white;
  border-radius: 4px;
`;

// ==== Component ====

const CheckboxWithImage = ({ label, defaultChecked = false }) => {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <CheckboxLabel>
      <HiddenCheckbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <CustomCheckbox checked={checked} />
      {label}
    </CheckboxLabel>
  );
};

const FilterBox = () => {
  return (
    <FilterContainer>
      <Section>
        <SectionTitle>الأسعار</SectionTitle>
        <CheckboxWithImage label="مجانية" defaultChecked />
      </Section>

      <Section>
        <SectionTitle>عرض فقط</SectionTitle>
        <CheckboxWithImage label="التخفيضات" defaultChecked />
      </Section>

      <Section>
        <SectionTitle>المنصة</SectionTitle>
        <CheckboxWithImage label="جهاز كمبيوتر" defaultChecked />
      </Section>
    </FilterContainer>
  );
};

export default FilterBox;
