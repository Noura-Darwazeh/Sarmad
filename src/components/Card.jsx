import React from 'react';
import styled from 'styled-components';
import card from '../assets/Card/card.png'; // يمكن استبداله ببروب أيضاً إذا رغبت

const CardWrapper = styled.div`
  width: 16rem;
  height: 24rem;
  border-radius: 1rem;
  background-image: url(${card});
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const CardInner = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 0.5rem;
  background-image: url(${props => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CardText = styled.div`
  margin-top: 0.5rem;
  margin-right: 34px;
  text-align: right;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight:400;
  margin: 7px 0px;
  color: #ffffff;
`;

const Price = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #ffffff;
`;

const Software = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: #ffffff;
`;

const ViewButton = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 16px;
  color: #ffffff;
  padding: 6px 22px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export default function Card({ innerImage, title, price, software, buttonText }) {
  return (
    <CardWrapper>
      <CardInner bg={innerImage} />

      <CardText>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Software>{software}</Software>
      </CardText>

      <ViewButton>{buttonText}</ViewButton>
    </CardWrapper>
  );
}
