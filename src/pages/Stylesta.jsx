import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MadeByUs, StylestaCard, StylestaSidebar } from "../components";
import { AllFemaleData, AllMaleData } from "../utils/StylestaData";
import Imagee from "../components/AssetsGalleryImage";
import Pagination from "../components/Pagination ";
import Cover from "../assets/Stylesta/stylestaCover.png";

export const Stylesta = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [selectedSection]);
  useEffect(() => {
    if (selectedSection < 10) {
      if (page === 1) {
        setImages(AllFemaleData[selectedSection].images.slice(0, 9));
      } else {
        setImages(AllFemaleData[selectedSection].images.slice(9, 18));
      }
    } else {
      if (page === 1) {
        setImages(AllMaleData[selectedSection - 10].images.slice(0, 9));
      } else {
        setImages(AllMaleData[selectedSection - 10].images.slice(9, 18));
      }
    }
  }, [selectedSection, page]);

  return (
    <div className="container">
      <MadeByUs />
      <Imagee src={Cover} />
      <PageContainer>
        <h2>ستايليستا</h2>
        <ContainerCardsSidebar>
          <StylestaSidebar
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <ShowcaseContainer>
            <Cards>
              {images.map(
                (item, index) =>
                  item && (
                    <StylestaCard
                      key={index}
                      image={item}
                      imageToDownload={
                        index === 0
                          ? (selectedSection < 10
                              ? AllFemaleData[selectedSection]
                              : AllMaleData[selectedSection - 10]
                            ).model
                          : item
                      }
                      name={
                        (selectedSection < 10
                          ? AllFemaleData[selectedSection]
                          : AllMaleData[selectedSection - 10]
                        ).title.slice(2) +
                        (selectedSection < 10 ? " أنثوي" : " ذكوري") +
                        (index + 1)
                      }
                    />
                  )
              )}
            </Cards>
            {AllFemaleData[selectedSection]?.images.length > 9 && (
              <Pagination setPage={setPage} pages={[1, 2]} />
            )}
          </ShowcaseContainer>
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

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
