import styled from "styled-components";

interface PropsButton {
  isCompleted: boolean;
}

export const Button = styled.button<PropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 177px;
  height: 50px;
  padding: 1rem;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.white : theme.gray.grayDark};
  border-radius: 1.6rem;
  background-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.gray.grayDark : "transparent"};
  border: 1px solid;
  border-color: ${({ theme, isCompleted }) =>
    isCompleted ? "transparent" : theme.gray.grayDark};
  font-weight: lighter;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  & + & {
    margin-left: 20px;
  }

  &:hover {
    background-color: ${({ theme, isCompleted }) =>
      isCompleted ? "transparent" : theme.gray.grayDark};
    color: ${({ theme, isCompleted }) =>
      !isCompleted ? theme.white : theme.gray.grayDark};
    border-color: ${({ theme, isCompleted }) =>
      !isCompleted ? "transparent" : theme.gray.grayDark};
  }

  @media(max-width: 1000px){
    max-width: 100px;
    & + & {
    margin: 0;
  }
  }

 

`;
