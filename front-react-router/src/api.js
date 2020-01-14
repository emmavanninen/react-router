import { Axios } from "./Axios";

export const apiGetUser = (id) => {
    return new Promise((resolve, reject) => {
        Axios.get(`/users/${id}`)
            .then(result => {
                resolve(result.data);
            })
            .catch(err => reject(err));
    });
};