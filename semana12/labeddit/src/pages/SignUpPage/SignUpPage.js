import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { PrincipalContainer } from './SignUpStyles'
import { InputContainer } from './SignUpStyles'
import { FormsContainer } from './SignUpStyles'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';
import { goToLoginPage } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { SignUp } from '../../services/users'

const SignUpPage = ({setHeaderButtonText}) => {

  useUnprotectedPage()

  const history = useHistory()

  const [form, onChange, clear] = useForm({ username: "", email: "", password: "", })

  const onSubmitForm = (event) => {
    event.preventDefault()
    SignUp(form, clear, history, setHeaderButtonText)
  }

  return (

    <PrincipalContainer>

      <InputContainer>

      <iframe src="https://giphy.com/embed/dvCIDcjaftXd3tvX6R" width="280" height="129" frameBorder="0" class="giphy-embed" ></iframe>

      <form onSubmit={onSubmitForm}>
        <FormsContainer>
        <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            variant="outlined"
            label="Username"
            size="small"
            margin="normal"
            required
            type={"username"}
            fullWidth
          />

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
            Register
          </Button>

          <br />

          <Button
            variant="outlined"
            color={"primary"}
            onClick={() => goToLoginPage(history)}
          >
            Back
          </Button>
        </FormsContainer>
        </form>
      </InputContainer>

    </PrincipalContainer>

  )
}

export default SignUpPage