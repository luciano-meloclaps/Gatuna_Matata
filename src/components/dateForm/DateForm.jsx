import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthenticationContext } from '../services/authentication/authentication.context';

import Button from 'react-bootstrap/esm/Button';

const DateForm = ({ onShiftDataSaved}) => {
    const [dateRead, setDateRead] = useState("");

    const { userData } = useContext(AuthenticationContext)

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().slice(0, 10);

    const onChangeDateHandler = (event) => {
        setDateRead(event.target.value)
    }

    const submitDateHandler = (event) => {
        event.preventDefault();
        const dateData = {
            date: new Date(dateRead),
            name: userData.name,
            email: userData.email,
            state: false
        }
        onShiftDataSaved(dateData);
    }

    return (
        <div>
            <form>
                <label>Ingrese la fecha que puede cuidar gato</label>
                <input onChange={onChangeDateHandler} type='date' min={currentDateString}/>
                <Button variant="primary" onClick={submitDateHandler}>Cargar turno</Button>
            </form>
        </div>
    )
}

export default DateForm