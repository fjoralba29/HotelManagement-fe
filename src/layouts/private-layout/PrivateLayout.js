import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { StyledBody} from './styles'
import Header from "../../components/header/Header"

const PrivateLayout = ({ withHeader }) => {
    const { width } = useWindowSize()
    const [isMobile, setIsMobile] = useState(width <= 448)
    useEffect(() => {
        setIsMobile(width <= 448)
    }, [width])

    return (
        <>
            {withHeader && <Header isMobile={isMobile}/>}
                <StyledBody withHeader={withHeader}>
                    <Outlet/>
                </StyledBody>
        </>
    )
}


export default PrivateLayout