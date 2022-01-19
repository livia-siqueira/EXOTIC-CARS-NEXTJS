import styled from "styled-components";

export const Container = styled.div`
  max-width: 450px;
  min-height: 50vh;
  border-radius: 12px;
  margin: 5rem auto;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.gray.grayMedium};
  background: linear-gradient(transparent, #FFFFFF 0%, ${({theme}) => theme.gray.grayLigth_5});
  padding: 2rem;

  @media(max-width: 700px){
    height: 100vh;
    border-radius: 0;
    width: 100%;
  }
  @media(max-width: 1000px){
    height: 60vh;
    border-radius: 0;
    margin: 7rem auto;
  }
  
`;


export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
`;

export const Form = styled.form`
  margin: 10px auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 1000px){
    height: 50%;
  }
`;

export const Control = styled.div`
  margin: 0px auto;
  width: 80%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Title = styled.h2`
  position: relative;
  color: ${({theme}) => theme.gray.grayDark};
  border-bottom: 3px solid ${({theme}) => theme.detailsButtonPurple};
  width: 20px;
  font-weight: lighter;
`;