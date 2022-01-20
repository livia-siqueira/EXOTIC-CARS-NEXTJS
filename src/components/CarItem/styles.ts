import styled from "styled-components";
import { FiMoreHorizontal, MdAttachMoney } from "@shared/index";

export const Container = styled.li`
  list-style: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.gray.grayLigth_8} 0% 0% no-repeat
    padding-box;
  padding: 1rem;
  margin-bottom: 20px;
  max-width: 260px;
  height: 223px;
  flex: 0 1 250px;
  margin-left: 12px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Model = styled.h6`
  font-weight: lighter;
  color: ${({ theme }) => theme.gray.grayDark};
  font-size: 1.1rem;
  font-variant: small-caps;
  font-family: "Segoe UI";
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.gray.grayDark};
`;

export const Period = styled.span`
  font-weight: normal;
  font-style: italic;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.gray.grayDark};
`;

export const Brand = styled.h4`
  font-size: 1.1rem;
`;

export const IconMoney = styled(MdAttachMoney)`
  width: 1rem;
  height: 1.7rem;
  margin-right: -2px;
  color: ${({ theme }) => theme.gray.grayDark};
`;
export const ContainerPricePeriod = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 20px;
`;

export const Icon = styled(FiMoreHorizontal)`
  color: ${({ theme }) => theme.gray.grayLigth_4};
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const HeaderItem = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Image = styled.div` 
display: relative;
  width: 100%;
  margin-top: 20px;
`
