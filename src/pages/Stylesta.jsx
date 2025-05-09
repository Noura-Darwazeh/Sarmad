import React, { useState } from "react";
import styled from "styled-components";
import { MadeByUs, StylestaSidebar } from "../components";
import { AllFemaleData, AllMaleData } from "../utils/StylestaData";
import WeaponCard from "../components/Card";
import Imagee from "../components/AssetsGalleryImage";

export const Stylesta = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className="container">
      <MadeByUs />
      <Imagee />
      <PageContainer>
        <h2>ستايليستا</h2>
        <ContainerCardsSidebar>
          <StylestaSidebar
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <Cards>
            {selectedSection < 10
              ? AllFemaleData[selectedSection].images.map((item, index) => (
                  <WeaponCard
                    key={index}
                    innerImage={item}
                    title="مجاناً"
                    software="Blender"
                    buttonText="تنزيل"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = item;
                      const extension = item.split(".").pop();
                      link.download =
                        "أنثوي " +
                        AllFemaleData[selectedSection].title +
                        (index + 1) +
                        "." +
                        extension;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  />
                ))
              : AllMaleData[selectedSection - 10].images.map((item, index) => (
                  <WeaponCard
                    key={index}
                    innerImage={item}
                    title="مجاناً"
                    software="Blender"
                    buttonText="تنزيل"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = item;
                      const extension = item.split(".").pop();
                      link.download =
                        "ذكوري " +
                        AllMaleData[selectedSection].title +
                        (index + 1) +
                        "." +
                        extension;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  />
                ))}
          </Cards>
        </ContainerCardsSidebar>
      </PageContainer>
    </div>
  );
};

const PageContainer = styled.div`
  padding-right: 75px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    padding-right: 30px;
  }

  @media (max-width: 600px) {
    padding-right: 15px;
    margin-top: 20px;
  }
`;

const ContainerCardsSidebar = styled.div`
  display: flex;
  direction: rtl;
  gap: 56px;
  margin-top: 45px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
