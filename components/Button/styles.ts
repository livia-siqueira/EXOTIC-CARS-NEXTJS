import styled from "styled-components";

interface PropsButton {
  isCompleted: boolean;
}

export const Button = styled.button<PropsButton>`
  margin-top: 2rem;
  max-width: 8rem;
  padding: 1rem;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.white : theme.gray.grayDark};
  border-radius: 1rem;
  background-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.gray.grayDark : "transparent"};
  border: 1px solid;
  border-color: ${({ theme, isCompleted }) =>
    isCompleted ? "transparent" : theme.gray.grayDark};
  font-weight: 400;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-variant: small-caps;
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
`;
