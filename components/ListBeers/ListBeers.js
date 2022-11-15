import {useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function ListBeers() {
    const [beers, setBeers] = useState([]);
    const [searchBeer, setSearchBeer] = useState("");

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data);
        })
        .catch(error=>console.log(error))
    }, []);

    const renderBeers = beers
        .filter(beer=>beer.name.toLowerCase().includes(searchBeer.toLowerCase()))
        .map(beer => {
        return (
            <Link to={`/${beer._id}`} key={beer._id}>
                <Row>
                    <Col>
                        <img src={beer.image_url} alt="beer label"/>
                    </Col>
                    <Col>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                    </Col>
                </Row>
            </Link>
        )
    });

    return (
        <div>
            <NavBar />
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchBeer}
                onChange={(e)=>setSearchBeer(e.target.value)}
                />
            </Form>
            {renderBeers}
        </div>
    );
}

export default ListBeers;