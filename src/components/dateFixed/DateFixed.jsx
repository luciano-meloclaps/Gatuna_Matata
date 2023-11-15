import React from 'react'

const DateFixed = ({ date }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("es-AR", { month: "long" });
    const day = date.toLocaleString("es-AR", { day: "2-digit" });

    return (
        <>
            <td>
                {day}
            </td>
            <td>
                {month}
            </td>
            <td>
                {year}
            </td>
        </>
    )
}

export default DateFixed