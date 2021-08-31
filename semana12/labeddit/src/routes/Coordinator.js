export const goToSignUpPage = (history) => {
    history.push("/signup")
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToFeedPage = (history) => {
    history.push("/")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}
