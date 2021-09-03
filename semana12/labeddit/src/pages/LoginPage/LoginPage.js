import React from 'react'
import { MainContainer } from './LoginStyles'
import { InputsContainer } from './LoginStyles'
import { FormContainer } from './LoginStyles'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import { goToSignUpPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import { login } from '../../services/users'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const LoginPage = ({setHeaderButtonText}) => {

  useUnprotectedPage()

  const history = useHistory()
  
  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history, setHeaderButtonText)
  }

  return (

    <MainContainer>

      <InputsContainer>

        <iframe 
        src="https://giphy.com/embed/4N3Mqhl8JRyYLapZgt" 
        width="280" 
        height="129" 
        frameBorder="0"
        ></iframe>

        <form onSubmit={onSubmitForm}>
          <FormContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            variant="outlined"
            label="E-mail"
            size="small"
            margin="normal"
            required
            type={"email"}
          />

          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            variant="outlined"
            label="Password"
            size="small"
            margin="normal"
            required
            type={"password"}
          />
          <br />
          <Button
            variant="outlined"
            color={"primary"}
            type={"submit"}
          >
            Login
          </Button>

          <br />
          <br />

          <Button
            onClick={() => goToSignUpPage(history)}
            variant="text"
            color={"primary"}
            
          >
            Sign Up now!
          </Button>
          </FormContainer>
        </form>
      </InputsContainer>

    </MainContainer>


  )
}

export default LoginPage