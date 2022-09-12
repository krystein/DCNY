import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import styled from "styled-components";
import { menuData } from "../../data/MenuData";
import { FaBars } from "react-icons/fa";
import "./navbar.css";
import Img from "../../img/PNG/logo.png";

const Logo = styled.div``;

const MenuBar = styled(FaBars)`
  display: none;
  @media Screen and (max-width: 1200px) {
    display: block;
    background-size: contain;
    height: 35px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #fff;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  @media Screen and (max-width: 1200px) {
    display: none;
  }
`;
const NavMenuLink = styled.a`
  cursor: pointer;
  color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
font-size: 1rem;
font-family: inter, sans-serif;
height: 100%
cursor: pointer;
text-decoration: none;
:hover{
    color: #4c7fb5;
}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  gap: 20px;
  button {
    background-color: #4c7fb5;
    border: 2px solid #4c7fb5;
    border-radius: 20px;
    height: 40px;
    width: 100px;
    color: #fff;
    font-family: Share Tech;
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: #4c7fb5;
      transform: scale(1.05);
      border: #4c7fb5;
      color: #fff;
      font-weight: 800;
    }
  }
  div {
    margin-right: 30px;
  }
  .img {
    width: 20px;
  }
  @media Screen and (max-width: 1200px) {
    display: none;
  }
  @media Screen and (max-width: 768px) {
    display: none;
  }
  @media Screen and (max-width: 480px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={colorChange ? "Itump active" : "Itump"}>
      <Logo>
        <Link to="/">
          <img src={Img} alt="" style={{ width: "70%" }} />
        </Link>
      </Logo>
      <MenuBar onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLink href={item.link} key={index}>
              {item.title}
            </NavMenuLink>
          );
        })}
      </NavMenu>
      <NavBtn>
        <button>Give</button>
      </NavBtn>
    </nav>
  );
};

export default Navbar;
