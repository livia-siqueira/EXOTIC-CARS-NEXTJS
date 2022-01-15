import styled from "styled-components";

export const Container = styled.div`
  max-width: 350px;
  min-height: 40vh;
  border-radius: 12px;
  margin: 0px auto;
  background: ${({ theme }) => theme.detailsButtonPurple};
  box-shadow: 0px 10px 10px ${({ theme }) => theme.gray.grayMedium};
  background-color: white;
  padding: 2rem;
  
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
`;

export const Form = styled.form`
  margin: 20% auto;
  margin-bottom: 2rem;
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
    font-size: 0,5rem;
    outline: none;

    ::placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.gray.grayLigth_4};
    }
  }
`;

export const Title = styled.h2`
  position: relative;

  &::before{
    content: '';
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 3px;
    left: 0%;
    border-radius: 8px;
    background-color: solid ${({ theme }) => theme.detailsButtonPurple} ;
    }
`;

export const Background = styled.div`
 
`;
