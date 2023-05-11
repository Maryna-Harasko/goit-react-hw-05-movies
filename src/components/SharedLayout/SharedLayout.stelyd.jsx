import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: sticky;
  z-index: 1100;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  background: rgb(215,11,11);
  background: rgb(215,11,11);
  background: linear-gradient(22deg, rgba(215,11,11,1) 0%, rgba(40,86,171,0.9626444327731093) 48%, rgba(29,1,37,0.8954175420168067) 100%);
`
export const Nav = styled.nav`
  display: flex;
  gap: 12px
`

export const PageLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  font-size: 24px;
  font-weight: 700;
  color:  #ff0000cf;
  border: 1px solid #483ac7;
  border-radius: 10px;
  text-align: center;
  transition: color 400ms ease;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  
  &:hover,
  &:focus,
  &:active {
    background-color: #354a9d;
  }
`