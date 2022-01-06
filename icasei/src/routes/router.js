import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import React from "react"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import SearchPage from "../pages/SearchPage/SearchPage"

const Router = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SearchPage/>
                </Route>

                <Route exact path="/video/:id">
                    <DetailsPage/>
                </Route>

                <Route>
                    <p>ERROR! PAGE NOT FOUND!</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router