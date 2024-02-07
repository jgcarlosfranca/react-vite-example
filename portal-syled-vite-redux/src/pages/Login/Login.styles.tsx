import styled from 'styled-components';
import montanhaImage from '../../assets/Images/montanha-login-page.jpg'

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
  align-items: center;
  justify-content: center;
  width: 30%;
  height:45%;
  background-color: #f0f8ff81;
  border-radius: 16px;
`
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height:45%;
  gap: 2rem;
  input {
    border-radius: 16px;
    height:2.5rem;
  }
  button{
    border-radius: 16px;
    height:2.5rem;
    background-color: #2E4362;
    color: white;
  }
`