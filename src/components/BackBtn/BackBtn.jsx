import PropTypes from 'prop-types';
import { FiArrowLeft } from "react-icons/fi";
import { BackLink } from './BackBtn.styled';

export const BackBtn = ({ path }) => {
  return(
    <BackLink to = {path}>
      <FiArrowLeft style={{ width: 30, height: 30 }} />
      <span>go back</span>
    </BackLink>
  )
}

BackBtn.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};