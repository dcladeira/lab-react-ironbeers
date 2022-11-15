import { Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Nav className="justify-content-center" defaultActiveKey="/home">
            <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;