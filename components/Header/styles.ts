import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  background-color: ${({ theme }) => theme.white} 0% 0% no-repeat padding-box;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 10px 30px ${({ theme }) => theme.gray.grayLigth_2};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-variant: small-caps;
  color: ${({ theme }) => theme.gray.grayDark};
`;

