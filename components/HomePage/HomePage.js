import ImgAllBeers from '../../assets/beers.png';
import ImgRandomBeer from '../../assets/random-beer.png';
import ImgAddBeer from '../../assets/new-beer.png';
import {Row, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <Row>
            <Link to="/beers">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ImgAllBeers} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            {/* Sente-se, relaxe e abra uma cerveja. Essa é a preparação necessária para
                            mergulhar no cardápio das melhores cervejas artesanais do mundo. */}
                            Sit back, relax and open a beer. This is the preparation needed to delve into
                            the menu of the best craft beers in the world.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to="/random-beer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ImgRandomBeer} />
                    <Card.Body>
                    <Card.Title>Random Beer</Card.Title>
                    <Card.Text>
                        {/* Não sabe o que beber? Confie na experiência dos nossos mestres cervejeiros e
                        deixe-se surpreender com uma cerveja escolhida ao acaso. */}
                        Don't know what to drink? Trust the experience of our brewmasters and
                        let yourself be surprised by a beer chosen at random.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to="/new-beer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ImgAddBeer} />
                    <Card.Body>
                    <Card.Title>Add Beer</Card.Title>
                    <Card.Text>
                        {/* Contribua adicionando um novo rótulo ao nosso cardápio, mas lembre-se que
                        é responsável por suas escolhas. Capriche na contribuição! */}
                        Contribute by adding a new label to our menu, but remember that
                        you are responsible for your choices. Make the contribution!
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Row>
    );
}

export default HomePage;