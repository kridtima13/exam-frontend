import React from 'react';
import JoinRoom from './JoinRoom';
import NameHello from './NameHello';
import NewRoom from './NewRoom';
import PersonAdd from './PersonAdd';
import RoomChat from './RoomChat';

export class FirstTime extends React.Component {
   state = {
      step: 1,
      name: '',
      roomName: '',
      joinRoomName: '',
   };

   // Proceed to next to one step
   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
   };

   // Go back to prev one step
   prevStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 1
      });
   };

   newRoomStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 2
      });
   }

   backNewRoomStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 2
      });
   }

   joinRoomStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
   }

   backJoinRoomStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 1
      });
   }

   nextJoinRoomStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 2
      });
   }

   // Handle fields change
   handleChange = input => e => {
      this.setState({ [input]: e.target.value });
   };

   render() {

      const { step } = this.state;
      const { name, roomName, joinRoomName } = this.state;
      const values = { name, roomName, joinRoomName };

      switch (step) {
         case 1:
            return (
               <PersonAdd
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
               />
            );
         case 2:
            return (
                  <NameHello
                     newRoomStep={this.newRoomStep}
                     joinRoomStep={this.joinRoomStep}
                     handleChange={this.handleChange}
                     values={values}
                  />
            );
         case 3:
            return (
               <JoinRoom
                  nextJoinRoomStep={this.nextJoinRoomStep}
                  backJoinRoomStep={this.backJoinRoomStep}
                  handleChange={this.handleChange}
                  values={values}
               />
            );
         case 4:
            return (
               <NewRoom
                  nextStep={this.nextStep}
                  backNewRoomStep={this.backNewRoomStep}
                  handleChange={this.handleChange}
                  values={values}
               />
            );
         case 5:
            return (
               <RoomChat
                  values={values}
               />
            );
         // case 4:
         //   return <Success />;
         default:
           (console.log('This is a multi-step form built with React.'))
      }

   }
}
