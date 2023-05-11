import styled from "styled-components";

export const ItemMovies = styled.li`
  height: 530px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`

export const ImgPoster = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`

export const Title = styled.h2`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: red;
`