import React from "react";
import styled from "styled-components";
import logo from "../assets/MultiLogo.png";
import search from "../assets/navbar/Vector.png";
import fav from "../assets/navbar/favorite.png";
import cart from "../assets/navbar/Shopping cart.png";
import account from "../assets/navbar/account_circle.png";

const HeaderContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  padding: 45px 91px;
  color: ${(props) => props.theme.colors.white};
  direction: rtl;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Logo = styled.div`
  img {
    height: 70px;
    width: 164px;

    @media (max-width: 768px) {
      height: 50px;
      width: 120px;
    }
  }
`;

const SearchBar = styled.div`
  background: none;
  border-radius: 12px;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  width: 611px;
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 12px;
  }
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  flex: 1;
  padding: 4px;
  color: ${(props) => props.theme.colors.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 30px;
  font-size: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Icon = styled.span`
  img {
    width: 24px;
    height: 24px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 77px;

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
    font-size: 13px;
    justify-content: center;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Navbar = () => {
  return (
    <HeaderContainer>
      <TopBar>
        <Logo>
          <img src={logo} alt="Sarmad Logo" />
        </Logo>

        <SearchBar>
          <SearchButton>
            <img src={search} alt="بحث" />
          </SearchButton>
          <SearchInput type="text" placeholder="البحث" />
        </SearchBar>

        <Icons>
          <Icon>
            <img src={fav} alt="المفضلة" />
          </Icon>
          <Icon>
            <img src={cart} alt="السلة" />
          </Icon>
          <Icon>
            <img src={account} alt="الحساب" />
          </Icon>
        </Icons>
      </TopBar>

      <NavMenu>
        <a href="#">الصفحة الرئيسية</a>
        <a href="#">ثلاثي الأبعاد</a>
        <a href="#">ثنائي الأبعاد</a>
        <a href="#">الطابعات</a>
        <a href="#">حمل شغلك</a>
        <a href="#">ستايليستنا</a>
        <a href="#">من نحن</a>
      </NavMenu>
    </HeaderContainer>
  );
};
