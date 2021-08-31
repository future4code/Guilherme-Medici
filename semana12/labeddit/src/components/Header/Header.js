import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledHeader } from './HeaderStyles'
import { goToFeedPage, goToLoginPage } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'

const Header = () => {

    const history = useHistory()

    return (

        <AppBar position="static">

            <StyledHeader>

                <Button onClick={() => goToFeedPage(history)} color="inherit"><h2>LabEddit</h2></Button>

                <Button onClick={() => goToLoginPage(history)} color="inherit">Login</Button>

            </StyledHeader>

        </AppBar>
    );
}

export default Header