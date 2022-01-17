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
  font-size: 2rem;
  font-variant: small-caps;
  font-weight: 400;
  color: ${({ theme }) => theme.gray.grayDark};
  display: flex;
  align-items: flex-end;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const TitleDiferent = styled.h4` 
  margin-left: 5px;
  font-size: 1rem;
  font-weight: lighter;

`
