import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.gray.grayLigth_8} 0% 0% no-repeat
    padding-box;
  padding: 1rem;
  margin-bottom: 20px;
  width: 250px;
  height: 223px;
  margin-left: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
`;

export const Model = styled.h6`
  font-weight: lighter;
  font-size: 1rem;
  font-variant: small-caps;
  font-family: "Segoe UI, Ligth";
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.gray.grayDark};
`;

export const Period = styled.span`
  font-weight: normal;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.gray.grayDark};
`;

export const Brand = styled.h4`
  font-size: 1rem;
`;

export const ContainerPricePeriod = styled.div`
  margin-left: 70%;
  margin-top: auto;
`;
