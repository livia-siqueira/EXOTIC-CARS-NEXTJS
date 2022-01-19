import styled from "styled-components";

export const Local_Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray.grayLigth_7};
  border-radius: 1.2rem;
  padding: 8px 15px;
  height: 2rem;
  
  @media (max-width: 1000px) {
    padding: 7px;
    width: 300px;
  }
  @media (max-width: 450px) {
    padding: 7px;
    width: 200px;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 1rem;
  margin-right: -15px;
  margin-left: 25px;
  color: ${({ theme }) => theme.detailsButtonPurple};
  text-align: center;
  width: 30px;
  height: 30px;
  @media (max-width: 450px) {
    display: none;
  }
`;

export const Content_Local_Details = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.gray.grayMedium};
  font-weight: 600;
  margin-left: 1rem;
  :first-child {
    margin-right: 4rem;
    @media (max-width: 1000px) {
      margin: 0;
    }
  }

  @media (max-width: 1000px) {
    font-size: 10px;
    margin: 0;
  }
`;
export const Text_Local_Details = styled.span`
  font-size: 1rem;
  margin-left: 0.2rem;
  @media (max-width: 1000px) {
    font-size: 12px;
    margin-right: 5px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    margin-right: 5px;
  }
`;

export const Text_Local_Details_Date = styled.span`
  font-size: 0.8rem;
  margin-left: 0.2rem;
  @media (max-width: 1000px) {
    font-size: 12px;
    margin-right: 5px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
    margin-right: 5px;
  }
`;
