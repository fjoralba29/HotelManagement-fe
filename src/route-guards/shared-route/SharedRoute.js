import { Outlet } from 'react-router-dom'
import PublicLayout from '../../containers/public-layout/PublicLayout'
import PrivateLayout from '../../containers/private-layout/PrivateLayout'
import config from '../../config'
import LocalStorageManager from '../../utilities/local-storage-manager'

const SharedRoute = () => {
    const accessToken = localStorage.getItem("user")

    return accessToken ? (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    ) : (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    )
}

export default SharedRoute
