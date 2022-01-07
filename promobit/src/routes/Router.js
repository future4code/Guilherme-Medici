import { BrowserRouter, Switch, Route } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/homepage"
import GenreListPage from "../pages/GenreListPage/GenreListPage"

const Router = () => {

    return (

        <BrowserRouter>
        <Switch>

            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/movies/:id">
                <DetailsPage/>
            </Route>

            <Route exact path="/genre/movie/list">
                <GenreListPage/>
            </Route>

            <Route>
                ERROR - PAGE NOT FOUND!
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router