import axios from 'axios'

const AuthAPI = {
    userLogin: data => {
        const url = 'http://localhost:4000/api/login'
        return axios.post(url, data)
    },
    userSignup: data => {
        const url = 'http://localhost:4000/api/sign-up'
        return axios.post(url, data)
    },

    hotels: () => {
        const url = 'http://localhost:4000/api/hotels'
        return axios.get(url)
    },
    rooms: (id) => {
        const url = `http://localhost:4000/api/rooms/${id}`;
        return axios.get(url);
    },
    rezervation: (id, data ) => {
        console.log(id, data);
        const url = `http://localhost:4000/api/rezervation/${id}`;
        return axios.post(url, data);
    },
    trips: () => {
        const url = 'http://localhost:4000/api/trips'
        return axios.get(url)
    },
    userTrip: (id, tripId ) => {
        console.log(id, tripId);
        const url = `http://localhost:4000/api/trips/${id}`;
        return axios.post(url, {tripId});
    },
    userDetails: (id) => {
        console.log(id);
        const url = `http://localhost:4000/api/user/${id}`;
        return axios.get(url);
    }
}

export default AuthAPI