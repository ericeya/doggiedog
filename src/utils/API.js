import axios from "axios"

const URL_PREFIX="http://localhost:8000"

const API = {
    // Signup function
    signup: userObj => {
        // Makes a post request to the backend
        return fetch(`${URL_PREFIX}/api/user`, {
            method: "POST",
            // Passes in the user oject
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    // Login function
    login: (userObj) => {
        const loginInfo = axios.post(`${URL_PREFIX}/api/login`, userObj)
        const dataLoginInfo = loginInfo.then((res) => res.data)
        return dataLoginInfo
    },

    // Check token function 
    checkToken: (token) => {
        const tokenInfo = axios.get(`${URL_PREFIX}/api/user`, {
            headers: {
                "Authorization" : `${token}`
            }
        })
        const dataTokenInfo = tokenInfo.then((res) => res.data)
        return dataTokenInfo
    },

    // GetOneUser function
    getOneUser: userId => {
        // GET fetch request to the backend passing in userId
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res => res.json())
    },

    // getReviewsByReviewee function
    getReviewsByReviewee: userId => {
        // GET fetch request to the backend passing in userId as the revieweeId
        return fetch(`${URL_PREFIX}/api/reviews/reviewee/${userId}`).then(res => res.json())
    },
   
    passwordVerification: userObj => {
        console.log(userObj)
        return fetch(`${URL_PREFIX}/api/users/verify/${userObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    newUserPassword: userObj => {
        return fetch(`${URL_PREFIX}/api/prop/password/${userObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    getUserByUsername: username => {
        return fetch(`${URL_PREFIX}/api/users/byusername/${username}`).then(res => res.json())
    },

    postImage: (formData, id) => {
        return fetch(`${URL_PREFIX}/api/image/singlefile/${id}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    },
    postMutlipleImages: (formData, id) => {
        return fetch(`${URL_PREFIX}/api/image/multipleFiles/${id}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    },
    getImages: () => {
        return fetch(`${URL_PREFIX}/api/image`, {
            method: "GET"
        }).then(res => res.json())
    },
    getSingleUserImages: (id) => {
        return fetch(`${URL_PREFIX}/api/image/${id}`, {
            method: "GET"
        }).then(res => res.json())
    },
    
    getPhotographers: () => {
        return fetch(`${URL_PREFIX}/api/searchusers/`).then(res=>res.json())
    },
    getFeatPro: () => {
        return fetch(`${URL_PREFIX}/api/searchusers/featured`).then(res=>res.json()) 
    },
    postProfilePic: (formData, userId) => {
        return fetch(`${URL_PREFIX}/api/image/profilepic/${userId}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    }
}


export default API