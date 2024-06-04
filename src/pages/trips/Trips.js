import { StyledTripCard, StyledTripHeader, StyledGlobeImage, StyledTripTitle,
    StyledTripContent, StyledImage
 } from './styles'

 import Button from '../../components/button/Button';
import AuthAPI from '../../http/user';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Trips = () => {

    const [ trips, setTrips ] = useState()
    const [ tripId, setTripId ] = useState(null)

    const navigate = useNavigate()

    const getTrips = async () => {

        try {
            const { data } = await AuthAPI.trips()
            setTrips(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTrips()
    },[])

let trip_id = null;

useEffect(() => {
    if (tripId) {
        trip_id = tripId;
        handleRezervation()
    }
},[tripId])

    const handleRezervation = async () => {
        const clientId = localStorage.getItem("user")
        
        
        try {
            const { response } = await AuthAPI.userTrip(clientId, tripId)
            alert('Reservation Confirmed!')
            
        } catch (error) {
            console.log(error, "errorrrr");
        }
      };

    return (
        <>
        {trips?.map((trip) => (
            <>

            <StyledTripCard className="trip-card">
                <StyledTripHeader className="trip-header">
                    <StyledGlobeImage src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMHRyaXB8ZW58MHx8MHx8fDA%3D" alt="Globe" className="globe-image" />
                    <StyledTripTitle className="trip-title">Journey through Wonders</StyledTripTitle>
                </StyledTripHeader>
                <StyledTripContent className="trip-content">
                    <div className="destination-section">
                        <h3>Destination: {trip?.place}</h3>
                        <StyledImage src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMHRyaXB8ZW58MHx8MHx8fDA%3D" alt="Landmarks" className="destination-image" />
                    </div>
                    <div className="itinerary-section">
                        <h3>Itinerary: {trip?.itinerary}</h3>
                        <StyledImage src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMHRyaXB8ZW58MHx8MHx8fDA%3D" alt="Map" className="itinerary-image" />
                    </div>
                    <div className="time-section">
                        <h3>Time:</h3>
                        <p>{trip?.time}</p>
                    </div>
                    <div className="price-section">
                        <h3>Price:</h3>
                        <p>{trip?.price}$</p>
                    </div>
                    <Button type={'submit'} width={200} onClick={() => {
                        setTripId(trip?.id)
                    }}>
                                Confirm Rezervation
                    </Button>
                </StyledTripContent>
            </StyledTripCard>
        </>))}
        </>
    )
}

export default Trips