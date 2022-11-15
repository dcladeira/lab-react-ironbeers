import {Button, Form} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        };
    
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
        .then(response => {
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel(0);
            setContributedBy("");
        })
    }

    return (
        <div>
            <NavBar />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" value={tagline} onChange={(e)=>setTagline(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control type="text" value={firstBrewed} onChange={(e)=>setFirstBrewed(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" value={attenuationLevel} onChange={(e)=>setAttenuationLevel(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" value={contributedBy} onChange={(e)=>setContributedBy(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ADD NEW
                </Button>
            </Form>
        </div>
    );
}

export default NewBeer;