import React from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

export default class JoinRoom extends React.Component {

   continue = e => {
      e.preventDefault();
      this.props.nextJoinRoomStep();
   };

   back = e => {
      e.preventDefault();
      this.props.backJoinRoomStep();
   };

   render() {
      const { values, handleChange } = this.props;
      return (
         <>
            <Form>
               <Form.Group className="my-5">
                  <Card.Title className='font-bold mb-4' style={{color: '#383838', fontSize: '37px'}}>เข้าร่วมแชท</Card.Title>

                  <Row>
                     <Col md={{ span: 6, offset: 3 }}>
                        <Form.Control 
                           className="font-medium mb-4 text-center input" 
                           type="text" 
                           style={{color: '#4e4e4e', border: '3px solid lightgray', borderRadius: '10px', height: '60px', fontSize: '34px'}} 
                           onChange={handleChange('joinRoomName')} 
                           value={values.joinRoomName}
                        />
                     </Col>
                  </Row>

                  <div className='fade-in'>
                     <Button variant="outline-white" className='font-medium mx-5 mt-3 back-button' size="lg" type="submit" style={{ border: 0}}  onClick={this.back}>
                        กลับ
                     </Button>
                     <Button variant="#c41417" className='font-medium mx-5 mt-3 button' size="lg" type="submit" style={{ padding: '16px 30px 16px 30px'}} onClick={this.continue}>
                        ยืนยัน
                     </Button>
                  </div>

               </Form.Group>
            </Form>
         </>
      )
   }
}