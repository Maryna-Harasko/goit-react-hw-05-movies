import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export const BackBtn = ({ path }) => {
  return(
    <NavLink to = {path}>go back</NavLink>
  )
}

BackBtn.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};