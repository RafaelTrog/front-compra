import React from "react";
import styled from "styled-components";

import { useHistory } from 'react-router-dom';

import Logo from "../../assets/logo-svg.svg";

import UserImage from '../../assets/user-img.png';

import {
  FaSearch,
  FaChevronDown
} from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #012269;

  display: flex;
  flex-direction: row;
  column-gap: 50px;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 300px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

const Search = styled.input`
  width: 690px;
  line-height: 50px;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  outline: none;
  border-width: 2px 0 2px 2px;
  border-radius: 5px 0 0 5px;
  border-style: solid;
  border-color: #c1c1c1;
  color: #4a4a4a;
  padding: 0 40px 0 10px;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  width: 750px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 50px;
  background-color: #fff;
  border-width: 2px 2px 2px 0;
  border-radius: 0 5px 5px 0;
  border-style: solid;
  border-color: #c1c1c1;

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 40px;
    height: 40px;
    fill: #c1c1c1;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  align-items: center;
`

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 25px;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
`

const Hello = styled.span`
  font-size: 18px;
`

const MinhaConta = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  font-size: 15px;
  align-items: center;
  cursor: pointer;

  & svg {
    fill: #fff;
    height: 12px;
  }
`

const DefaultBar = () => {
  const history = useHistory();

  const handleLogo = () => {
    history.push('/');
  }

  return (
    <Container>
      <LogoImg src={Logo} alt="Australianas" onClick={handleLogo}/>
      <InputContainer>
        <SearchContainer>
          <Search placeholder="busque aqui seu produto" />
          <IconContainer>
            <FaSearch />
          </IconContainer>
        </SearchContainer>
      </InputContainer>
      <RightContainer>
        <UserContainer>
          <UserImg src={UserImage} alt="User" />
          <UserInfo>
            <Hello>olá Rafael</Hello>
            <MinhaConta>
              <span>minha conta</span>
              <FaChevronDown />
            </MinhaConta>
          </UserInfo>
        </UserContainer>
      </RightContainer>
    </Container>
  );
};

export default DefaultBar;
