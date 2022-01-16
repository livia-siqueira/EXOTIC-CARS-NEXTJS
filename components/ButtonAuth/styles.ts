import styled from "styled-components";

interface Button {
  isBorder: boolean;
  page: string;
}

export const Button = styled.button<Button>`
  color: ${({ theme }) => theme.detailsButtonPurple};
  border: ${({ isBorder, theme }) =>
      isBorder ? theme.detailsButtonPurple : theme.white}
    1px solid;
  background-color: transparent;
  font-weight: bold;
  padding: 4px;
  width: ${({page}) => page === 'Header' ? '5rem' : '60%'};
  border-radius: 13px;
  outline: none;
`;
