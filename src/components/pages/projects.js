import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Laptop from '../../assets/laptop.jpeg'
import OnlyFlix from '../../assets/onlyflix.png'
import CassetteTape from '../../assets/cassettetape.png'

export default function Projects() {
    return (
        <div>
            <h1>My Projects</h1>
            <CardGroup>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {OnlyFlix} />
      <Card.Body>
        <Card.Title>Only Flix</Card.Title>
        <Card.Text>
        Movie app that uses css framework Tailwind and Jquery for functionality. 
        Retrieves data from another application's API to render top rated movies.
        </Card.Text>
        <Card.Link href="https://rosalvamartinez.github.io/OnlyFlix/">View App</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src= {CassetteTape} />
      <Card.Body>
        <Card.Title>The Cassette Tape</Card.Title>
        <Card.Text>
        A web app that allows users to sign up and create a playlist for special event. 
        Other Users can search and add songs to an event playlist. 
        </Card.Text>
        <Card.Link href="https://the-cassette-tape.herokuapp.com/">View App</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src= {Laptop} />
      <Card.Body>
        <Card.Title>Web Accessibility Debug</Card.Title>
        <Card.Text>
        Completed debugging activity. I reviewed HTML to ensure
        the webpage was web accessible. 
        </Card.Text>
        <Card.Link href="https://github.com/VHS35/Challenge01.git">View App</Card.Link>
      </Card.Body>
    </Card>
    
    </CardGroup>
    

           
        </div>
    )
}