import { NavLink } from "react-router-dom";

export const BackBtn = ({ path }) => {
  return(
    <NavLink to = {path}>go back</NavLink>
  )
}

