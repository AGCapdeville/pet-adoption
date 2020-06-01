import React from 'react';
import homeStyle from './home.module.scss';

const Home = () => {

    return (
        <div className={homeStyle.screen} >
            <div>
                <p>
                    Welcome
                </p>
            </div>
        </div>
    );
}

export default Home