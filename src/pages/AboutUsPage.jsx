import React from "react";
import styled from "styled-components";
import {
  GroupImg,
  LeemaImg,
  LeenImg,
  LeftCornerTitle,
  RamaImg,
  WhyBgImg,
  WhyItemBG,
} from "../assets";

export const AboutUsPage = () => {
  return (
    <Container>
      <Title width="365px" height="109px" bg={LeftCornerTitle}>
        <h1>تعريف عن التطبيق</h1>
      </Title>
      <p>
        نحن منصة رقمية متخصصة في توفير أصول عالية الجودة لألعاب الفيديو ثنائية
        وثلاثية الأبعاد، بهدف دعم المطورين والمصممين في إنجاز مشاريعهم بكفاءة
        واحترافية. نسعى لتقديم مكتبة شاملة ومتجددة تلبي مختلف احتياجات صناعة
        الألعاب.
      </p>
      <WhyContainer>
        <h1>لماذا نحن؟</h1>
        <WhyItemsContainer>
          <div>
            <h2>سهولة في الأستخدام </h2>
            <p>
              نمكنكم من العثور على ما تحتاجونه بسرعة و سهولة , فتحميل الأصول و
              تنفيذهل على مشروعك لا يتطلب وقتاً طويلاً
            </p>
          </div>
          <div>
            <h2>تخصيص حسب احتياجاتك</h2>
            <p>
              نمكنكم من اضافة لمستكم الفنية و التغييرات المناسبة للأصول حسب
              احتياجاتكم
            </p>
          </div>
          <div>
            <h2>مجتمع مطورين حيوي</h2>
            <p>
              نتيح لكم نبادل الأفكار و الخبرات من خلال تحميل تصاميمكم الخاصة
            </p>
          </div>
        </WhyItemsContainer>
      </WhyContainer>
      <Title width="328px" height="105px" bg={GroupImg}>
        <h1>فريق العمل</h1>
      </Title>
      <img
        src={LeenImg}
        alt="Leen"
        style={{
          height: "330px",
          marginRight: "auto",
          marginTop: "10px",
        }}
      />
      <img
        src={RamaImg}
        alt="Rama"
        style={{
          height: "330px",
          marginLeft: "auto",
        }}
      />
      <img
        src={LeemaImg}
        alt="Leema"
        style={{
          height: "330px",
          marginRight: "auto",
          marginBottom: "-50px",
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 90px 70px;
  flex-direction: column;
  align-items: flex-end;
  p {
    width: 820px;
    font-size: 22px;
    margin: 35px 6px 107px 0px;
    line-height: 40px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.bg}) no-repeat center;
  background-size: cover;
  h1 {
    font-size: 34px;
  }
`;

const WhyContainer = styled.div`
  gap: 92px;
  width: 100%;
  height: calc((100vw - 140px) * 0.52);
  display: flex;
  padding: 47px 52px 167px 52px;
  margin-bottom: 88px;
  align-items: center;
  flex-direction: column;
  background: url(${WhyBgImg}) no-repeat center;
  background-size: cover;
  @media (max-width: 994px) {
    gap: 20px;
    height: 1350px;
  }
`;

const WhyItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 338px;
  div {
    gap: 28px;
    width: 338px;
    height: 338px;
    display: flex;
    padding: 48px 34px 20px 29px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    background: url(${WhyItemBG}) no-repeat center;
    background-size: cover;
    h2 {
      font-size: 24px;
    }
    p {
      width: 295px;
      font-size: 24px;
      margin: 0;
    }
  }
  @media (max-width: 1258px) {
    div {
      width: 250px;
      height: 250px;
      padding: 20px 30px 20px 30px;
      h2 {
        font-size: 16px;
      }
      p {
        width: 210px;
        font-size: 16px;
      }
    }
  }
  @media (max-width: 994px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    div {
      width: 338px;
      height: 338px;
      padding: 48px 34px 20px 29px;
      gap: 28px;
      h2 {
        font-size: 24px;
      }
      p {
        width: 295px;
        font-size: 24px;
        margin: 0;
      }
    }
  }
`;
