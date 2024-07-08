import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const fetchHotels = () => {
    return axios.get('http://localhost:4000/api/hotels')
}

export const useHotelsData = (onSucess, onError) => {

    return useQuery({
        queryKey: ['users'],
        queryFn: fetchHotels,
        onSucess,
        onError
      })
}