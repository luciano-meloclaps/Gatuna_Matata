import React from 'react'
import Toast from 'react-bootstrap/Toast';
import DateFixed from '../dateFixed/DateFixed';

const Shift = ({ shifts }) => {


    return (
        <div>
            <h2>Tu disponibilidad</h2>{/Hay que hacer un filter segun el name de los turnos que trae/}
            {shifts.filter(shift => shift.status === false).map(shift => {  //No se actualizan los libros y hay que volver a meterse para que no aparezca más la tarjeta eliminada, arreglar eso :p 
                return (
                    <Toast key={shift.id} onClose={() => {
                        fetch(`http://localhost:8000/books/${shift.id}`, { 
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

                    }}>
                        <Toast.Header>
                            <strong className="me-auto">Fecha</strong>
                        </Toast.Header>
                        <Toast.Body>
                            <DateFixed date={shift.date} />
                        </Toast.Body>
                    </Toast>
                )
            })}
        </div>
    )
}

export default Shift