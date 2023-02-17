import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import Logo from './assets/images/logo.png';
import {FirstTime} from './components/FirstTime';
import "./index.css";


function App() {
  return (
    <div className="bg">
      <Container className='text-center'>
        <div className='py-2'>
          <Image src={`${Logo}`} alt="logo" height={40}></Image>
        </div>

        <Card className='card' border='light'>
          <Card.Body>           

            <FirstTime></FirstTime>
            
          </Card.Body>
        </Card>
      </Container>
    </div>
    
  );
}

export default App;


