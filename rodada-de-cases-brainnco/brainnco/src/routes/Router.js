import React from "react"
import { Switch, Route } from "react-router-dom"
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LotoFacilPage from "../pages/LotoFacilPage/LotoFacil"
import LotoManiaPage from "../pages/LotoManiaPage/LotoMania"
import MegaPage from "../pages/MegaPage/Mega"
import QuinaPage from "../pages/QuinaPage/Quina"
import TimeManiaPage from "../pages/TimeManiaPage/TimeMania"

const Router = () => {

    return (
            <Switch>
                <Route exact path="/lotofacil">
                    <LotoFacilPage />
                </Route>

                <Route exact path="/lotomania">
                    <LotoManiaPage />
                </Route>

                <Route exact path="/">
                    <MegaPage />
                </Route>

                <Route exact path="/quina">
                    <QuinaPage />
                </Route>

                <Route exact path="/timemania">
                    <TimeManiaPage />
                </Route>

                <Route exact path="/diadesorte">
                    <DiaDeSortePage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router