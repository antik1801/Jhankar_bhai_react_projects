import React from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';

const AddRoom = () => {
    // handleFormSubmit 
    const handleFormSubmit = event =>{
        event.preventDefault();
        console.log('Hello from form');
    }
    return (
        <div>
            <AddRoomForm handleFormSubmit={handleFormSubmit}></AddRoomForm>
        </div>
    );
};

export default AddRoom;