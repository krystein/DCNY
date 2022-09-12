import React from "react";

//import components
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { FaGreaterThan, FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #08111c;
  display: grid;
  align-items: center;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  @media screen and (max-width: 1200px) {
    width: 40%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cusrsor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-gap: 10px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const DropdownLink = styled.a`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
  text-decoration: none;
  text-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 1rem;
  padding: 0px 30px;
  &:hover {
    color: #ff9f0d;
  }
`;

const BtnWarp = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 50px;
  justify-item: center;
  button {
    background-color: #e7c482;
    border: none;
    border-radius: 0px 10px 8px 10px;
    font-size: 1.2rem;
    font-family: inter, sans-serif;
    font-weight: 600;
    height: 50px;
    width: 200px;
    color: #fff;
  }
  .btn {
    display: flex;
    justify-content: center;
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdownLink href={item.link} key={index}>
                {item.title} <FaGreaterThan style={{ fontSize: "14px" }} />
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWarp>
          <div className="btn">
            <a href="/Openaccount">
              <button>Sign up</button>
            </a>
          </div>
        </BtnWarp>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
