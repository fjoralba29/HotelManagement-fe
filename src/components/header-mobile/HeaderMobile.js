import { MenuIcon, DoneIcon } from '../../assets/icons/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTE_HOME } from '../../utilities/constants'
import { StyledHeaderMobileRoot, StyledHeaderMobileUserInfo } from './styles'
import useUser from '../../hooks/useUser'


const HeaderMobile = () => {
    const navigate = useNavigate()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    const { user } = useUser()
    return (
        <StyledHeaderMobileRoot>
            <StyledHeaderMobileUserInfo>
                <DoneIcon onClick={() => navigate(ROUTE_HOME)} />
                {user && (
                    <MenuIcon
                        onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                    />
                )}
            </StyledHeaderMobileUserInfo>
        </StyledHeaderMobileRoot>
    )
}

export default HeaderMobile