import React from "react";
import styled from "styled-components";
import footer from "../assets/Footer/Footer.png";
import logo from "../assets/MultiLogo.png";
import facebook from "../assets/Footer/Facebook.png";
import Twitter from "../assets/Footer/Twitter.png";
import Instagram from "../assets/Footer/Instagram.png";

const FooterContainer = styled.footer`
  margin-top: 50px;
  background-image: url(${footer});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.colors.white};
  padding: 2rem 4rem;
  direction: rtl;

  @media (max-width: 426px) {
    padding: 2rem;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 70px;
  width: 164px;

  @media (max-width: 426px) {
    margin: 0 auto;
    display: block;
  }
`;

const FooterContent = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 1px;

  @media (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-right: 0;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;

  @media (max-width: 426px) {
    min-width: unset;
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

const LogoContainer = styled.div`
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 1.5rem;

  @media (max-width: 426px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  margin-top: 1.5rem;

  @media (max-width: 426px) {
    font-size: 16px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="سرمد" />

      <FooterContent>
        <FooterSection>
          <LogoContainer>
            <SectionTitle>سرمد</SectionTitle>
          </LogoContainer>
          <LinksList>
            <li>
              <FooterLink href="#">عن التطبيق</FooterLink>
            </li>
          </LinksList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>اكتشف</SectionTitle>
          <LinksList>
            <li>
              <FooterLink href="#">لعبة الشطرنج</FooterLink>
            </li>
            <li>
              <FooterLink href="#">ألعاب الذكاء</FooterLink>
            </li>
            <li>
              <FooterLink href="#">الألعاب الأكثر شعبية</FooterLink>
            </li>
          </LinksList>
        </FooterSection>

        <FooterSection>
          <SectionTitle>للمستثمرين</SectionTitle>
          <LinksList>
            <li>
              <FooterLink href="#"> للاشتراك/تسجيل الدخول</FooterLink>
            </li>
          </LinksList>
        </FooterSection>
      </FooterContent>

      <SocialLinks>
        <SocialIcon href="#" aria-label="تويتر">
          <IconImage src={Twitter} alt="تويتر" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="إنستغرام">
          <IconImage src={Instagram} alt="إنستغرام" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="فيسبوك">
          <IconImage src={facebook} alt="فيسبوك" />
        </SocialIcon>
      </SocialLinks>

      <Copyright>© جميع الحقوق لتطبيق (سرمد)</Copyright>
    </FooterContainer>
  );
};
