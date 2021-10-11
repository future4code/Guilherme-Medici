import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledHeader } from './HeaderStyles'
import { goToFeedPage, goToLoginPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'

const Header = ({headerButtonText, setHeaderButtonText}) => {

    const history = useHistory()

    const token = localStorage.getItem("token")


    const logout = () => {
        localStorage.removeItem("token")
    }

    const headerButtonAction = () => {
        if (token) {
            logout()
            setHeaderButtonText("Login")
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    }

    return (

        <AppBar position="static">

            <StyledHeader>

                <Button onClick={() => goToFeedPage(history)} color="inherit"><h2>LabEddit</h2></Button>

                <Button onClick={headerButtonAction} color="inherit">{headerButtonText}</Button>

            </StyledHeader>

        </AppBar>
    );
}

export default Header