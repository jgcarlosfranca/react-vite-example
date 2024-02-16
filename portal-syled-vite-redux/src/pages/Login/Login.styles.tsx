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
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  min-width: 30%;
  min-height:35%;
  background-color: #f0f8ff81;
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
    padding: 0 4px 0 16px;
    background-color: transparent;
    border-width: 1px;
  }
  button{
    border-radius: 16px;
    font-size: 24px;
    background-color: #2E4362;
    color: white;
    margin-bottom: 24px;
  }
`
export const LoginTitle = styled.span`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  color: #2E4362;
  margin: 75px 0 1.25rem 0;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`