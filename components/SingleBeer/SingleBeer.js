import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import CardBeer from '../CardBeer/CardBeer';

function SingleBeer() {
    const {id} = useParams();
    const [beer, setBeer] = useState([]);

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => {
            setBeer(response.data);
        })
        .catch(error=>console.log(error))
    }, []);

    console.log(beer);

    return (
        <div>
            <NavBar />
            <CardBeer beer = {beer} />
        </div>
    )
}

export default SingleBeer;