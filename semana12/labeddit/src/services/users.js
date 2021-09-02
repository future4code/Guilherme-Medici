import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeedPage } from '../routes/Coordinator'

const headers = {

    "Content-Type": "application/json"
}

export const login = (body, clear, history) => {

    axios.post(`${BASE_URL}/users/login`, body, headers)

        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToFeedPage(history)
        })

        .catch((error) => alert("User not found!"))

}

export const SignUp = (body, clear, history) => {

    axios.post(`${BASE_URL}/users/signup`, body, headers)

        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((error) => alert("Sign Up Error!"))
}