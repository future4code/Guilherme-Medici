import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import ListTripPage from "./público/ListTripPage/ListTripPage";
import ApplicationFormPage from "./público/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./privado/LoginPage/LoginPage";
import AdminHomePage from "./privado/AdminHomePage/AdminHomePage";
import CreateTripPage from "./privado/CreateTripPage/CreateTripPage"
import TripDetailsPage from "./privado/TripDetailsPage/TripDetailsPage"
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Routes() {

    return (

        <BrowserRouter>
            <AppContainer>
            <Switch>

                <Route exact path={"/"}>
                    <HomePage/>
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripPage/>
                </Route>

                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage/>
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage/>
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage/>
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage/>
                </Route>

            </Switch>
            </AppContainer>
        </BrowserRouter>

    )
}

export default Routes;