import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
  overflow-x: hidden;
`;

const NavIcon = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 750px) {
    display: block;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3%;
  padding-bottom: 35px;
`;

const NavBar = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 70%; /* Adjusted width */
  height: 90px;
  border-radius: 20px;
  border: 2px solid white;
    box-shadow: 12px 12px white;
  padding: 0 15%;
  margin-left:-3%;
  
`;

const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 180%;
  font-weight: 600;
  color: white; /* Changed color to white */
`;

const NavLinksContainer = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  gap: 8%;
  align-items: center;
  justify-content: center;
`;

const NavLink = styled(Link)`
  font-size: 100%;
  text-decoration: none;
  color: white; /* Changed color to white */
`;

const NavButton = styled.button`
  padding: 2% 4%;
  font-size: 100%;
  font-weight: 500;
  width: 130px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  transition: 600ms;

  &:hover {
    background-color: #FAF9F5;
    color: black;
    transform: translateX(-6px);
    box-shadow: 7px 5px;
    border: 2px solid rgb(63, 62, 62);
  }
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Nav>
          <NavBar>
            <Logo>1lycoffee</Logo>
            <NavIcon onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon />
            </NavIcon>
            <StyledNav mobileNavActive={mobileNavActive}>
              <NavLinksContainer>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/cart">Cart</NavLink>
              </NavLinksContainer>
            </StyledNav>
          </NavBar>
        </Nav>
      </Center>
    </StyledHeader>
  );
}
