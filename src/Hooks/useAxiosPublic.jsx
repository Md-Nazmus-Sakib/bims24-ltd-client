import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bims24ltd-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;