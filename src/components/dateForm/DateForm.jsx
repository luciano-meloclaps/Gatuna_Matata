import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

const DateForm = ({user, onShiftDataSaved}) => {
    const [dateRead, setDateRead] = useState("");

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().slice(0, 10);

    const onChangeDateHandler = (event) => {
        setDateRead(event.target.value)
    }

    const submitDateHandler = (event) => {
        event.preventDefault();
        console.log(user)
        const dateData = {
            date: new Date(dateRead),
            name: user.name,
            email: user.email,
            state: false
        }
        onShiftDataSaved(dateData);
        console.log(dateData)
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