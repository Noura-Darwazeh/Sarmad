import React from "react";
import styled from "styled-components";
import { MonthGTitleBGImg, MoreBackgroundImg } from "../assets";
export const MonthGamePage = () => {
  return (
    <Container>
      <SubContainer>
        <Title>
          <p>وصف اللعبة:</p>
        </Title>
        <p>
          في عالم يمزج بين الماضي والمستقبل، تأخذك "أسطورة العصور" في رحلة
          ملحمية حيث تتصادم الفروسية التقليدية مع التكنولوجيا المستقبلية!
        </p>
      </SubContainer>
      <SubContainer>
        <Title>
          <p>قصة اللعبة:</p>
        </Title>
        <p>
          بعد اكتشاف بوابة زمنية غامضة، يجد المحارب الأسطوري "مالك" نفسه في
          مواجهة جيوش من المقاتلين السيبرانيين القادمين من المستقبل، يقودهم
          القائد "نيكسون"، وهو مقاتل مدجج بأحدث الأسلحة والتقنيات المتطورة.
          الخيار الوحيد أمام مالك هو التكيف، تعلم تقنيات جديدة، وتوحيد قوى
          الماضي والمستقبل لإنقاذ العصور من الدمار!
        </p>
      </SubContainer>
      <SubContainer>
        <Title>
          <p>المزايا:</p>
        </Title>
        <li>معارك حماسية تجمع بين السيف التقليدي وأسلحة الليزر.</li>
        <li>استكشاف عوالم متنوعة، من القلاع القديمة إلى المدن المستقبلية.</li>
        <li>تخصيص الشخصيات بالقدرات والأسلحة المدمجة بين الزمنين.</li>
      </SubContainer>

      <MoreContainer>
        <button>تعرف عالمزيد</button>
      </MoreContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  p {
    font-size: 22px;
    max-width: 64vw;
    line-height: 2.2;
    margin-right: 1vw;
  }
  @media (max-width: 920px) {
    p {
      max-width: 90vw;
    }
  }
`;

const SubContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 5vw 5vw 0 auto;
  li {
    direction: rtl;
    font-size: 22px;
    max-width: 64vw;
    font-weight: 300;
    line-height: 2.2;
    margin-right: 1vw;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Title = styled.div`
  height: 80px;
  width: 293px;
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
  background-size: 100%;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-image: url(${MonthGTitleBGImg});
  p {
    font-size: 1.5rem;
    margin-right: 1.6rem;
    font-weight: 600;
  }
`;

const MoreContainer = styled.div`
  margin-top: 5vw;
  margin-bottom: 160px;
  height: 597px;
  width: 100vw;
  background-image: url(${MoreBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  button {
    width: 307px;
    height: 54px;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 10px;
    font-family: "Almarai";
    border: 1px solid white;
    border-bottom: none;
    margin: auto 5vw 57px auto;
    background: linear-gradient(180deg, #aca6ee 0%, #9790ea 100%);
  }
`;
