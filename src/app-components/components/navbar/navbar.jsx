import React from 'react';
import navbarStyle from './navbar.module.scss';
import { useDispatch } from 'react-redux';
import { setScreen } from '../../../ducks/screen';


const Adoption = () => {
    
    const dispatch = useDispatch();

    return (
        <div className={navbarStyle.navbar}>
            <button className={navbarStyle.button} onClick={() => dispatch(setScreen('Home'))}> <span> Home </span> </button>
            <button className={navbarStyle.button} onClick={() => dispatch(setScreen('Adoption'))}> <span> Adoption </span> </button>
            <button className={navbarStyle.button} onClick={() => dispatch(setScreen('About'))}> <span> About </span> </button>
        </div>
    );
}

export default Adoption