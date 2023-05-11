import React from "react";
import PropTypes from 'prop-types';
import { SectionEl, Container } from "./Section.styled";

export const Section = ({children}) =>{
  return(
    <SectionEl>
      <Container>{children}</Container>
    </SectionEl>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};