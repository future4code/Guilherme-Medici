import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'



const Routes = ({setHeaderButtonText}) => {

    return (

        <Switch>

            <Route exact path="/">

                <FeedPage />

            </Route>

            <Route exact path="/login">

                <LoginPage setHeaderButtonText={setHeaderButtonText}/>

            </Route>

            <Route exact path="/post/:id">

                <PostPage />

            </Route>

            <Route exact path="/signup">

                <SignUpPage setHeaderButtonText={setHeaderButtonText}/>

            </Route>

            <Route>

                <ErrorPage />

            </Route>

        </Switch>

    )
}

export default Routes