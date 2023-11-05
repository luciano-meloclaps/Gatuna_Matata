import React from 'react'
import DateForm from '../dateForm/DateForm'

const NewDate = ({userInformation, addedShiftHandler}) => {

    const saveShiftDataHandler = (enteredShiftData) => {
        const shiftData = {
            ...enteredShiftData,
            id: Math.random().toString(),
        };
        addedShiftHandler(shiftData);
    }

    return (
        <div>
            <DateForm user={userInformation} onShiftDataSaved={saveShiftDataHandler}/>
        </div>
    )
}

export default NewDate