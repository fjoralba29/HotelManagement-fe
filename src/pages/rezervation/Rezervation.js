import { StyledContainer, StyledRezervationContainer, StyledForms } from './styles'

import Accordion from '../../components/accordion/Accordion'
import Formcard from '../../components/form-card/Formcard'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { useEffect, useState } from 'react'
import AuthAPI from '../../http/user'
import Datepicker from '../../components/date-picker/DatePicker'
import { useForm, Controller } from 'react-hook-form'
import { CalendarIcon } from '../../assets/icons/icons'
import { useNavigate } from 'react-router-dom'

const Rezervation = () => {

    const [ hotels, setHotels ] = useState()
    const [ availableRooms, setAvailableRooms ] = useState([1,2])
    const [ hotelId, setHotelId ] = useState(0)
    const [ roomId, setRoomId ] = useState(0)
    const [ cardNumber, setCardNumber ] = useState()
    const [ cardPin, setCardPin ] = useState()
    const [ checkin, setCheckin ] = useState()
    const [ checkout, setCheckout ] = useState()

    const navigate = useNavigate()

    const {control} = useForm()

    const getHotels = async () => {
        try{
            const { data }= await AuthAPI.hotels();
            setHotels(data);
        } catch (error) {

        }
    }

    const getRooms = async (id) => {
        try {
          const { data } = await AuthAPI.rooms(id);
          setAvailableRooms(data);
        } catch (error) {
          console.error('Error fetching rooms:', error);
          setAvailableRooms([])
        }
    };

    const handleCard = (e) => { setCardNumber(e.target.value) }
    const handlePin = (e) => { setCardPin(e.target.value) }

    const handleCheckIn = (date) => {setCheckin(date)}


    const handleRezervation = async () => {
        const clientId = localStorage.getItem("user")
        const data = {roomId, checkin, cardNumber, cardPin}
        try {
    
        const { response } = await AuthAPI.rezervation(clientId, data)
        alert('Reservation Confirmed!')
        navigate('/trips')
            
        } catch (error) {
            console.log(error, "errorrrr");
        }
    } 


 
    useEffect(() => {
        getHotels()
    },[])

    useEffect(() => {
        getRooms(hotelId)
    },[hotelId])

    return (
        <StyledContainer>
            <StyledRezervationContainer>
                <h1>Make your rezervation now</h1>
                <Controller
                    name="dateRange"
                    control={control}
                    defaultValue={null}
                    render={({ field: { onChange, value } }) => (
                        <Datepicker
                            value={value} 
                            onChangeCb={(newValue) => {
                                onChange(newValue); 
                                handleCheckIn(newValue); 
                            }}
                            control={control}
                            label="Date Range"
                            name="dateRange"
                            placeholder="Select Date Range"
                            helpText="Select a date range."
                            isRange={true} 
                            icon={<CalendarIcon fill='black' />}
                            required
                        />
                    )}
                />
                <h2>Hotels</h2>
                <StyledForms>
                    {hotels?.map((hotel) => (
                        <Formcard text={hotel.hotel_name} description={hotel.rating} onClick={() => { setHotelId(hotel.id)}} />
                    ))}
                </StyledForms>
                {availableRooms != 0 && 
                <Accordion title={`Available rooms ${availableRooms?.length}`}>

                    <StyledForms>
                        {availableRooms?.map((room) => (
                            <Formcard text={room.type_of_room} description={room.beds} onClick={() => {setRoomId(room.id)}}/>
                        ))}
                    </StyledForms>
                </Accordion>}
                {roomId != 0 && 
                    <div style={{width: "100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Input
                            type={'text'}
                            label={'Credit Card'}
                            placeholder={'Enter your card number'}
                            onBlur={handleCard}
                            required
                        />
                        <Input
                            type={'text'}
                            label={'PIN'}
                            placeholder={'Enter your PIN'}
                            onBlur={handlePin}
                            required
                        />
                        <Button type={'submit'} width={300} onClick={handleRezervation} >
                            Rezervate
                        </Button>
                    </div>
                }
            </StyledRezervationContainer>
        </StyledContainer>
    )
}


export default Rezervation