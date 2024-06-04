import { Navigate, Outlet } from 'react-router-dom'
import { ROUTE_REZERVATION } from '../../utilities/constants'
import LocalStorageManager from '../../utilities/local-storage-manager';

const PublicRoute = () => {
    const accessToken = LocalStorageManager.user.get()
    console.log(accessToken);
    return accessToken ? <Navigate to={ROUTE_REZERVATION} /> : <Outlet />
}

export default PublicRoute
