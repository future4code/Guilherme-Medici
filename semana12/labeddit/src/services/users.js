import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeedPage } from '../routes/Coordinator'

const headers = {

    "Content-Type": "application/json"
}

export const login = (body, clear, history, setHeaderButtonText) => {

    axios.post(`${BASE_URL}/users/login`, body, headers)

        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
            setHeaderButtonText("Logout")
        })

        .catch((err) => alert("LOGIN FAILED!"))
    
}

export const SignUp = (body, clear, history, setHeaderButtonText) => {

    axios.post(`${BASE_URL}/users/signup`, body, headers)

        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
            setHeaderButtonText("Logout")
        })
        .catch((error) => alert("SIGN UP ERROR!"))
}