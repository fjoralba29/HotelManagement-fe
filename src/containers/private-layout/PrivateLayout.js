import {Outlet} from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize'
import { StyledBody, StyledRoot} from './styles'
import Header from "../../components/header/Header"


const PrivateLayout = ({ withHeader }) => {

    return (
        <>
            <StyledRoot>
            {withHeader && (<Header />)}
                <StyledBody withHeader={withHeader}>
                    <Outlet/>
                </StyledBody>
            </StyledRoot>
        </>
    )
}


export default PrivateLayout