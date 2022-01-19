import styled from "styled-components";
import Link from "next/link";


export const Header = styled.header`
  width: 100%;
  height: 5rem;
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const TitleDiferent = styled.h4`
  margin-left: 5px;
  font-size: 1rem;
  font-weight: lighter;
`;

export const LinkPageHome = styled(Link)`
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;

export const Container_Menu = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.gray.grayLigth};
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 8%;
  right: 15%;

  @media (max-width: 1000px) {
    top: 8%;
    right: 25%;
  }
`;

export const Content_Menu = styled.div`
  border-radius: 50px;
`;
export const ButtonMenu = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.detailsButtonPurple};
  margin-right: 12px;
`;

export const Button = styled.button`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.gray.grayLigth};
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.detailsButtonPurple};
`;

export const AreaSearch = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const AreaSearchClicked = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
`;
