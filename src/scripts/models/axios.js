const token = localStorage.getItem("@kenzieRedeSocial:token")
export const instance = axios.create({
    baseURL: " https://m2-rede-social.herokuapp.com/api",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }
})