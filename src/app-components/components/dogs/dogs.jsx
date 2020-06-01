import React from 'react';
import navbarStyle from './navbar.module.scss';
import { useDispatch } from 'react-redux';

import { useDogList } from '../../../ducks/dogs';


const Card = (img) =>{

    const dogs = useDogs();
    const dispatch = useDispatch();

    return(
    <div>
        {
            dogs.list.map( (dog, index) =>
            <button className={styles.customButton}>
                <div className = {styles.dogContainer}>
                    <br/>
                    {dog.img}
                    <br/>
                    {/* {dog.name} */}
                    {/* {dog.breed} */}
                </div>
            </button>      
            )
        }
    </div>
    )
}



const Dogs = () => {
    
    const dispatch = useDispatch();

    return (
        <div className={navbarStyle.screen}>
            <p>Generated list...</p>
        </div>
    );
}

export default Dogs