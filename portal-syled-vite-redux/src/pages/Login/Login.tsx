import { useState, ChangeEvent } from 'react';
import { useLoginMutation } from '../../redux/Feature/loginSlice';
import Loading from '../TransitionPages/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/paths';
import styled from 'styled-components';
import montanhaImage from '../../assets/Images/montanha-login-page.jpg'

interface IFormState {
  user: string;
  password: string;
  canSeePassword: boolean;
}

const LoginBackground = styled.div`
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

const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height:45%;
  background-color: #f0f8ff81;
  border-radius: 16px;
`
const LoginBox = styled.div`
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

const Login = () => {
  const navigate = useNavigate();
  const [loginApi, { isLoading, isError }] = useLoginMutation();
  const [formFields, setFormFields] = useState<IFormState>({
    user: "",
    password: "",
    canSeePassword: false,
  });

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement>,
    setStateFn: React.Dispatch<React.SetStateAction<IFormState>>
  ) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type === "checkbox") {
      setStateFn((prevData) => ({ ...prevData, [name]: e.target.checked }));
    } else {
      setStateFn((prevData) => ({ ...prevData, [name]: e.target.value }));
    }
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): Promise<void> => {
    event?.preventDefault();
    try {
      const authReponse = await loginApi({
        email: formFields.user,
        senha: formFields.password,
      });
      if ('data' in authReponse) {
        sessionStorage.setItem("authToken", authReponse?.data?.token);
        navigate(paths.Land);
      }

    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loading text='Carregando ...' textLength='2rem' />
  }

  return (

    <LoginBackground>
      <LoginBoxWrapper>
        <LoginBox>
          <input type='text' name='user' placeholder='Insira o usuario' value={formFields.user} onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(ev, setFormFields)
          } />
          <input type='password' name='password' placeholder='Insira a senha' value={formFields.password} onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleChangeInput(ev, setFormFields)
          } />
          <button onClick={
            handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
          }> Submit </button>
        </LoginBox>
      </LoginBoxWrapper>
    </LoginBackground>

  )
}

export default Login;