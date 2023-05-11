import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return(
    <LoaderContainer>
      <ThreeDots color="#212b62"/>
    </LoaderContainer>
  )
}