import { Outlet } from "react-router-dom";

import logo from "../../assets/heyImSushiBomber.jpg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { useCart } from "../../context/cart-context";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSlice";
import { signOutAuth } from "../../utils/firebase/firebase.utils";
import * as Styled from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useCart();

  console.log(currentUser);

  return (
    <>
      <Styled.NavigationContainer>
        <Styled.LogoContainer to="/">
          <Styled.Logo src={logo} alt="logo"></Styled.Logo>
        </Styled.LogoContainer>
        <Styled.NavLinks>
          <CartIcon />
        </Styled.NavLinks>
        <Styled.NavLinks>
          {currentUser ? (
            <Styled.NavLink
              onClick={async () => {
                await signOutAuth();
              }}
            >
              Sign Out
            </Styled.NavLink>
          ) : (
            <Styled.NavLink to="authentication">Sign In</Styled.NavLink>
          )}
        </Styled.NavLinks>
        <Styled.NavLinks>
          <Styled.NavLink to="contact">Contact</Styled.NavLink>
        </Styled.NavLinks>
        <Styled.NavLinks>
          <Styled.NavLink to="menu">Shop</Styled.NavLink>
        </Styled.NavLinks>
        {isCartOpen && <CartDropdown />}
      </Styled.NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
