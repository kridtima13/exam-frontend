import React from 'react';
import { Card, Form, Alert  } from 'react-bootstrap';

export default class RoomChat extends React.Component {

   render() {
      const { values } = this.props;
      return (
         <>
            <Card.Title className='font-bold' style={{color: '#383838', fontSize: '37px', textAlign: 'start'}}>
               ห้อง {values.roomName ? values.roomName : values.joinRoomName}
            </Card.Title>

            <Card className="bg-light text-start" style={{border: '0', height: '80vh'}}>
               <div className='pt-2 px-2 font-medium' style={{color: '#4e4e4e', fontSize: '14px'}}>คุณ eiei</div>
               <Card.Body className='pt-0'>
                  <Alert className='font-medium text-center alert-hello ' style={{color: '#383838', fontSize: '20px', width: '90px', padding: '10px'}}>สวัสดี</Alert>
               </Card.Body>
               <Form.Control 
                  className="mt-auto mb-0 font-medium text-end pt-4" 
                  type="text" 
                  placeholder="Enter เพื่อส่ง"
                  style={{color: '#4e4e4e', border: '3px solid lightgray', borderRadius: '10px', height: '60px', fontSize: 'ๅ4px'}} 
               />
            </Card>
         </>
      )
   }
}