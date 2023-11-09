import React from 'react'
import Toast from 'react-bootstrap/Toast';
import { useContext } from 'react';

import DateFixed from '../dateFixed/DateFixed';
import { AuthenticationContext } from '../services/authentication/authentication.context';


const Shift = ({ shifts, setShiftHandler }) => {

    const { userData } = useContext(AuthenticationContext)

    const arreglo = shifts.filter(shift => shift.id === userData.id).map(shift => {
        return (
            <Toast key={shift.id} onClose={async () => {
                await fetch(`http://localhost:8000/books/${shift.id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                    },
                })
                    .then((response) => {
                        if (response.ok) return response.json();
                        else {
                            throw new Error("The response has some errors!");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })

                ////////////////////////////////////////

                await fetch("http://localhost:8000/books", {
                    headers: {
                        accept: "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((shiftData) => {
                        const shiftMapped = shiftData.map((shift) => ({
                            ...shift,
                            date: new Date(shift.date),
                        }))
                        setShiftHandler(shiftMapped);
                    })
                    .catch((error) => console.log(error))
            }}>
                <Toast.Header>
                    <strong className="me-auto">Fecha</strong>
                </Toast.Header>
                <Toast.Body>
                    <DateFixed date={shift.date} />
                </Toast.Body>
            </Toast>
        )
    })

    return (
        <div>{arreglo}</div>
    )
}

export default Shift