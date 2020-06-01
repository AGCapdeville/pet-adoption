import React from 'react';
import Home from './app-components/screen/home';
import Adoption from './app-components/screen/adoption';
import About from './app-components/screen/about';
import Navbar from './app-components/components/navbar';

import { useScreen } from './ducks/screen';

const screens = {
    Home,
    Adoption,
    About,
}

const App = () => {
    const screen = useScreen();
    const Screen = screens[screen];
  
    return (
        <div>
            <Navbar />
            <Screen />
        </div>
        );

}

export default App;
