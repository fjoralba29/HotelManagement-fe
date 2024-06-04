import { createBrowserRouter } from 'react-router-dom'
import SharedRoute from './route-guards/shared-route/SharedRoute'
import PrivateRoute from './route-guards/private-route/PrivateRoute'
import PublicRoute from './route-guards/public-route/PublicRoute'
import PrivateLayout from './containers/private-layout/PrivateLayout'
import PublicLayout from './containers/public-layout/PublicLayout'
import * as routeNames from './utilities/constants'
import * as pages from './pages'

const router = createBrowserRouter(
    [
        {
            element: <PrivateRoute />, // authenticated user layout route
            children: [
                {
                    element: <PrivateLayout withHeader/>,
                    children: [
                        {
                            exact: true,
                            path: routeNames.ROUTE_REZERVATION,
                            element: <pages.Rezervation />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_TRIPS,
                            element: <pages.Trips />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_USER_INFO,
                            element: <pages.UserInfo />,
                        },
                    ],
                },
            ],
        },
        {
            element: <PublicRoute />, // anonymous user layout route
            children: [
                {
                    element: <PublicLayout />,
                    children: [
                        {
                            exact: true,
                            path: routeNames.ROUTE_LOGIN,
                            element: <pages.Login />,
                        },
                        {
                            exact: true,
                            path: routeNames.ROUTE_SIGNUP,
                            element: <pages.Register />,
                        },
                    ],
                },
            ],
        },
        {
            element: <SharedRoute />,
            children: [],
        },
        {
            path: '*', // Not found route
            element: <pages.NotFound />,
        },
    ],
    {
        basename: '/',
    }
)

export default router