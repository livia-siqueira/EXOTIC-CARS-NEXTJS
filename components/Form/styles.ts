import styled from "styled-components";

export const Container = styled.div`
  width: 25rem;
  height: 30rem;
  border-radius: 12px;
  margin: 0px auto;
  background: ${({ theme }) => theme.detailsButtonPurple};
  box-shadow: 0px 10px 10px ${({ theme }) => theme.gray.grayMedium};
  background-color: white;
  padding: 5px;
  
`;

export const HeaderForm = styled.header`
  //background: linear-gradient(
    //0deg,
    //rgba(123, 137, 244, 1) 8%,
    //rgba(212, 212, 212, 1) 99%
  //);
  //height: 20%;
  //padding-top: 5px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Form = styled.form`
  margin: 20% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Control = styled.div`
  margin: 12px auto;
  width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
  
  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.gray.grayLigth_4};
    padding-left: 20px;
    width: 100%;
    height: 2rem;
    font-size: 1rem;
    outline: none;

    ::placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.gray.grayLigth_4};
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 5px solid ${({ theme }) => theme.detailsButtonPurple};
  width: 10%;
  border-radius: 3px;
  font-size: 2rem;
  padding-bottom: 2px;
  margin-left: 20px;
`;

export const Background = styled.div`
 
`;
