import {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import CardBeer from '../CardBeer/CardBeer';

function RandomBeer() {
    const [beer, setBeer] = useState([]);

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
            setBeer(response.data);
        })
        .catch(error=>console.log(error))
    }, []);

    return (
        <div>
            <NavBar />
            <CardBeer beer = {beer} />
        </div>
    );
}

export default RandomBeer;