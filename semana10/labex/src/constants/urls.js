export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diana-dumont"

export const axiosConfig = {
    headers: { auth: window.localStorage.getItem('token') }
}