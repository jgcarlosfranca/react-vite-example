import styled from 'styled-components';
import montanhaImage from '../../assets/Images/montanha-login-page.jpg'
import { SystemColors } from '../../Styles/systemColors';

export const LoginBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url(${montanhaImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  min-width: 30%;
  min-height:35%;
  background-color: ${SystemColors.secundary.first.color};
  border-radius: 16px;
`
export const LoginBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-width: 80%;
  gap: 2rem;
  input {
    border-radius: 16px;
    font-size: 1.225rem;
    padding: 4px 4px 4px 16px;
    background-color: transparent;
    border-width: 1px;
  }
  button{
    border-radius: 16px;
    font-size: 24px;
    background-color: ${SystemColors.main.first.color};
    border-color: ${SystemColors.main.first.color};
    color: white;
    margin-bottom: 24px;
    &:hover{
      background-color: ${SystemColors.main.semiTransparent.color};
    border-color: ${SystemColors.main.first.color};
    }
  }
`
export const LoginTitle = styled.span`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  color: ${SystemColors.main.first.color};
  margin: 75px 0 1.25rem 0;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`