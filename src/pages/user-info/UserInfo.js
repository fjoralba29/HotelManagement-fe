import { useEffect, useState } from "react";
import AuthAPI from "../../http/user"
import LocalStorageManager from "../../utilities/local-storage-manager"
import React from 'react';
import {
  PageContainer,
  Card,
  SectionTitle,
  InfoContainer,
  InfoItem,
} from './styles';

const UserInfo = () => {

    const [ user, setUser ] = useState()
    const [ room, setRoom ] = useState()
    const [ trip, setTrip ] = useState([])

    const getUserData = async (id) => {
        try {
            const { data } = await AuthAPI.userDetails(id)
            setUser(data?.user)
            setRoom(data?.room)
            setTrip(data?.trip)
        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        const userId = LocalStorageManager.user.get()
        getUserData(userId)
    },[])

    return (
        <PageContainer>
      <Card>
        <SectionTitle>Room Details</SectionTitle>
        <InfoContainer>
          <InfoItem>
            <h3>Address:</h3>
            <p>{room?.address}</p>
          </InfoItem>
          <InfoItem>
            <h3>Air Conditioner:</h3>
            <p>{room?.air_conditioner ? 'Yes' : 'No'}</p>
          </InfoItem>
          <InfoItem>
            <h3>Balcony:</h3>
            <p>{room?.balcony ? 'Yes' : 'No'}</p>
          </InfoItem>
          <InfoItem>
            <h3>Beds:</h3>
            <p>{room?.beds}</p>
          </InfoItem>
          <InfoItem>
            <h3>Check-in Date:</h3>
            <p>{room?.check_in_date}</p>
          </InfoItem>
          <InfoItem>
            <h3>Check-out Date:</h3>
            <p>{room?.check_out_date}</p>
          </InfoItem>
          <InfoItem>
            <h3>Hotel Name:</h3>
            <p>{room?.hotel_name}</p>
          </InfoItem>
          <InfoItem>
            <h3>Hotel Rating:</h3>
            <p>{room?.hotel_rating}</p>
          </InfoItem>
          <InfoItem>
            <h3>Room Price:</h3>
            <p>{room?.room_price}$</p>
          </InfoItem>
          <InfoItem>
            <h3>Type of Room:</h3>
            <p>{room?.type_of_room}</p>
          </InfoItem>
        </InfoContainer>
      </Card>

      <Card>
        <SectionTitle>Trip Details</SectionTitle>
        {trip?.map((item) => (

        
        <InfoContainer style={{ "border-bottom": "1px solid rgb(54, 27, 169)" }}>
          <InfoItem>
            <h3>Place:</h3>
            <p>{item?.place}</p>
          </InfoItem>
          <InfoItem>
            <h3>Itinerary:</h3>
            <p>{item?.itinerary}</p>
          </InfoItem>
          <InfoItem>
            <h3>Time:</h3>
            <p>{item?.time}</p>
          </InfoItem>
          <InfoItem>
            <h3>Trip Price:</h3>
            <p>{item?.trip_price}</p>
          </InfoItem>
        </InfoContainer>))}
      </Card>

      <Card>
        <SectionTitle>User Details</SectionTitle>
        <InfoContainer>
          <InfoItem>
            <h3>First Name:</h3>
            <p>{user?.first_name}</p>
          </InfoItem>
          <InfoItem>
            <h3>Last Name:</h3>
            <p>{user?.last_name}</p>
          </InfoItem>
          <InfoItem>
            <h3>Email:</h3>
            <p>{user?.email}</p>
          </InfoItem>
          <InfoItem>
            <h3>Phone:</h3>
            <p>{user?.phone}</p>
          </InfoItem>
        </InfoContainer>
      </Card>
    </PageContainer>


        
    )

}

export default UserInfo