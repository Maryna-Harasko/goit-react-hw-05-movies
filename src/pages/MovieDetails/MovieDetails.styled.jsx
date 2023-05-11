import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerDetails = styled.div`
  padding: 32px;
`
export const ListPage = styled.ul`
  display: flex;
  gap: 15px;
`

export const InfoPageLink = styled(NavLink)`
  display: block;
  margin-top: 20px;
  cursor: pointer;
  color: inherit;
  font-size: 24px;
  transition: color 400ms ease;

  &:visited{
    color: inherit;
  }
  
  &:hover,
  &:focus,
  &:active {
    color: #ff0000cf;
  }
`