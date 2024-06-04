import {RouterProvider} from "react-router-dom";
import router from "./router";
import {ThemeProvider} from "styled-components";
import {getAppTheme, GlobalStyles} from "./theme";
import AlertProvider from "./context/AlertProvider";
import UserProvider from "./context/UserProvider";

const App = () => {

    //TODO: get theme from user settings
    const themeName = 'light'
    const theme = getAppTheme({name: themeName})
    return (
        <ThemeProvider theme={getAppTheme({name: themeName})}>
            <AlertProvider>
                <UserProvider>
                    <GlobalStyles />
                    <RouterProvider router={router}/>
                </UserProvider>
            </AlertProvider>
        </ThemeProvider>
    );
}

export default App;
