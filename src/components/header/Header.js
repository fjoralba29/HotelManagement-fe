import {Link, useNavigate} from 'react-router-dom'
import useUser from '../../hooks/useUser'
import {ROUTE_LOGIN, ROUTE_REZERVATION, ROUTE_TRIPS, ROUTE_USER_INFO} from "../../utilities/constants/routeNames"
import Button from '../button/Button'
import { StyledHeaderRoot, StyledHeaderLogo, StyledHeaderInfo, StyledHeaderUserInfo, LoginLink } from './styles'


const Header = () => {
    const navigate = useNavigate()
    console.log(useUser);

    return (
        <StyledHeaderRoot>
            <StyledHeaderLogo>
                <Link to={"/rezervation"}>
                    <h3> BOOK YOUR HOLIDAYS </h3>
                </Link>
            </StyledHeaderLogo>
            <StyledHeaderInfo>
                {useUser ? (
                      <>
                      <LoginLink><Link to={ROUTE_REZERVATION}> Rezervation </Link></LoginLink>
                      <LoginLink><Link to={ROUTE_TRIPS}> Trips </Link></LoginLink>
                      <LoginLink><Link to={ROUTE_USER_INFO}> User Info </Link></LoginLink>
                      <Button
                          width={140}
                          size={'medium'}
                          variant={'borderless'}
                          onClick={() => {localStorage.clear()
                            navigate(ROUTE_LOGIN)
                          }}
                      >
                          Log out
                      </Button>
                  </>
                
                ) : (
                    <>
                        <StyledHeaderUserInfo
                            onClick={() =>
                                navigate(
                                    `${"".replace(
                                        ':username',
                                        useUser?.username
                                    )}`
                                )
                            }
                        >
                           {' '} 
                            {useUser?.username}
                        </StyledHeaderUserInfo>
                        </>
                  
                )}
            </StyledHeaderInfo>
        </StyledHeaderRoot>
    )
}

export default Header
