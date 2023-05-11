import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-size: 24px;
  font-weight: 700;
  color: #ff0000cf;
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