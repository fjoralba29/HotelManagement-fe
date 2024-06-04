import { Navigate, Outlet } from 'react-router-dom'
import { ROUTE_LOGIN } from '../../utilities/constants'
import config from "../../config";
import LocalStorageManager from '../../utilities/local-storage-manager';


const PrivateRoute = () => {
    const accessToken = LocalStorageManager.user.get()
    return accessToken ? <Outlet /> : <Navigate to={ROUTE_LOGIN} />
}

export default PrivateRoute
