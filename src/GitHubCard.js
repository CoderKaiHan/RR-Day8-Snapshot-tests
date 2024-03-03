import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard () {
    return (
        <div>
          <Card style={{ width: '400px', margin: 'auto' }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/147564905?s=400&u=4bd21078a4e3e930415da3b001dd4c1127e03e90&v=4" />
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>GitHub name: CoderKaiHan</Card.Title>
              <Card.Text>
              <LoremIpsum p={1} />
              </Card.Text>
              <Card.Link href='https://github.com/CoderKaiHan' target="_blank" rel="noopener noreferrer" ><Button variant="primary">Go to GitHub</Button></Card.Link>
            </Card.Body>
          </Card>
        </div>
    );

}

export default GitHubCard;