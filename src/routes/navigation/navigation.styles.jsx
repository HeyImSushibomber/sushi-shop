import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 75px;
  width: 100%;
  display: inline-block;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
`;

export const Logo = styled.img`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin: 15px;
`;

export const NavLinks = styled.div`
  height: 100%;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
