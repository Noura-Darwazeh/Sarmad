import React from "react";
import styled from "styled-components";
import WeaponCard from "../components/Card";
import Sidebar from "../components/AssetsGallerySidebar";
import hammer from "../assets/threeDWeapons/hammer.png";
import sword from "../assets/threeDWeapons/sword.png";
import SwordOfZulfiqar from "../assets/threeDWeapons/swordOfZulfiqar.png";
import dagger from "../assets/threeDWeapons/dagger.png";
import ironMachine from "../assets/threeDWeapons/ironMachine.png";
import { MadeByUs } from "../components/MadeByUs";
import Imagee from "../components/AssetsGalleryImage";
import threeDweaponsImage from '../assets/threeDWeapons/ThreeDweapons.png'
import { useNavigate } from "react-router-dom";

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

function ThreeDWeapons() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <MadeByUs />
      <Imagee src={threeDweaponsImage} />

      <PageContainer>
        <h2>أسلحة ثلاثية الأبعاد</h2>
        <ContainerCardsSidebar>
          <Sidebar />
          <Cards>
            <WeaponCard
              innerImage={SwordOfZulfiqar}
              title=" سيف ذو الفقار "
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
              onClick={() => navigate("/view?id=0")}
            />

            <WeaponCard
              innerImage={hammer}
              title="مطرقة"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={sword}
              title="سيف"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />

            <WeaponCard
              innerImage={dagger}
              title="خنجر"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
            <WeaponCard
              innerImage={ironMachine}
              title="الة حديدية"
              price="مجاناً"
              software="Maya"
              buttonText="عرض"
            />
          </Cards>
        </ContainerCardsSidebar>
      </PageContainer>
    </div>
  );
}

export default ThreeDWeapons;
