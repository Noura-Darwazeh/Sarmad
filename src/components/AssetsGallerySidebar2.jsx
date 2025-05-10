import React, { useState } from "react";
import styled from "styled-components";
import sidebar from "../assets/Sidebar/Glass.png";
import checkedIcon from "../assets/Sidebar/ckeck_True 1.png";
import { useNavigate } from "react-router-dom";

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
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CustomCheckbox = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  background-image: ${(props) =>
    props.checked ? `url(${checkedIcon})` : "none"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid white;
  border-radius: 4px;
`;

// ==== Component ====

const CheckboxWithImage = ({ label, path, checked, onChange }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onChange(path);
    navigate(path);
  };

  return (
    <CheckboxLabel onClick={handleClick}>
      <HiddenCheckbox checked={checked} onChange={() => {}} />
      <CustomCheckbox checked={checked} />
      {label}
    </CheckboxLabel>
  );
};

const FilterBox = () => {
  const [selectedPath, setSelectedPath] = useState("");

  const handleCheckboxChange = (path) => {
    setSelectedPath(path);
  };

  return (
    <FilterContainer>
      <Section>
        <SectionTitle>الأصول ثنائية الأبعاد</SectionTitle>
        <CheckboxWithImage
          label="الشخصيات"
          path="/two-d-characters1"
          checked={selectedPath === "/two-d-characters1"}
          onChange={handleCheckboxChange}
        />
        <CheckboxWithImage
          label="البيئات"
          path="/two-d-environments"
          checked={selectedPath === "/two-d-environments"}
          onChange={handleCheckboxChange}
        />
        <CheckboxWithImage
          label="الأسلحة"
          path="/two-d-weapons1"
          checked={selectedPath === "/two-d-weapons1"}
          onChange={handleCheckboxChange}
        />
      </Section>
    </FilterContainer>
  );
};

export default FilterBox;
