export const goToDetailsPage = (history, id) => {
    history.push(`/movies/${id}`)
}

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToGenreListPage = (history) => {
    history.push("/genre/movie/list")
}