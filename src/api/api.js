import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b9361731-f53d-4604-bf4b-16540b08e7d6"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data});
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
};


