import axios from "axios"

// backend address
const URL_PREFIX="http://localhost:8000"

const API = {
    // Call signup endpoint
    signup: userObj => {
        // Makes a post request to the backend
       const signup = axios.post(`${URL_PREFIX}/api/signup`, userObj)
       const dataSignup = signup.then((res) => res.data)
       return dataSignup
    },

    // Call Login endpoint
    login: (userObj) => {
        const loginInfo = axios.post(`${URL_PREFIX}/api/login`, userObj)
        const dataLoginInfo = loginInfo.then((res) => res.data)
        return dataLoginInfo
    },

    // Check token for validation
    checkToken: (token) => {
        const tokenInfo = axios.get(`${URL_PREFIX}/api/user`, {
            headers: {
                "Authorization" : `${token}`
            }
        })
        const dataTokenInfo = tokenInfo.then((res) => res.data)
        return dataTokenInfo
    },

    getImage: () => {
        const imageList = axios.get(`${URL_PREFIX}/api/imagelist`)
        const dataImageList = imageList.then((res) => res.data)
        return dataImageList
    },

    getUserImages: (id) => {
        const imageList = axios.get(`${URL_PREFIX}/api/userimages`)
        const dataImageList = imageList.then((res) => res.data)
        return dataImageList
    },

    uploadImage: (formData, token) => {
        const uploadImage = axios.post(`${URL_PREFIX}/api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`
            },
        })
        const dataUploadImage = uploadImage.then((res) => res.data)
        return dataUploadImage
    }




    
}


export default API