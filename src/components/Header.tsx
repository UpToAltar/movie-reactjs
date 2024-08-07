
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Header() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Điều hướng đến trang mới
        navigate(`/search?title=${query}`);
    };
    return (
        <Navbar expand="lg" className="bg-black">
            <Container fluid>
                <Navbar.Brand style={
                    {color : 'red', fontWeight : 'bold',fontSize : '25px'}
                }  href="#" onClick={() => navigate('/')}>MOVIE NETFLIX</Navbar.Brand>
                <Navbar.Toggle style={{backgroundColor : 'white'}} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link style={
                            {color : 'white'}
                        } href="#action1">Home</Nav.Link>
                        <Nav.Link style={
                            {color : 'white'}
                        } href="#action2">About</Nav.Link>
                        <Nav.Link style={
                            {color : 'white'}
                        } href="#action2">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button onClick={handleSearch} variant="danger">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;