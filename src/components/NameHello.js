import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default class NameHello extends React.Component {

   continue = e => {
      e.preventDefault();
      this.props.newRoomStep();
   };

   continueJoinRoom = e => {
      e.preventDefault();
      this.props.joinRoomStep();
   };

   render() {
      const { values } = this.props;
      return (
         <>
            <div className='fade-in'>
               <Card.Title className='font-bold mt-5' style={{color: '#383838', fontSize: '37px'}}>
                  คุณ {values.name}
               </Card.Title> 
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>

               <Button variant="#c41417" className='font-medium mx-5 mt-3 button' size="lg" type="submit" style={{ padding: '16px 70px 16px 70px'}} onClick={this.continue}>
                  สร้างห้องใหม่
               </Button>
               <br></br>
               <Button variant="outline-white" className='font-medium mx-5 mt-3 join-button' size="lg" type="submit" style={{ border: 0}} onClick={this.continueJoinRoom}>
                  เข้าร่วมแชท
               </Button>
            </div>
         </>
      )
   }
}