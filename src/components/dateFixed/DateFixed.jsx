import React from 'react'
import { useContext } from 'react';
import { AuthenticationContext } from '../services/authentication/authentication.context';

const DateFixed = ({ date }) => {
    const year = date.getFullYear();
    const month = date.toLocaleString("es-AR", { month: "long" });
    const day = date.toLocaleString("es-AR", { day: "2-digit" });

    const dayFixed = Number(day) + 1 

    const { userData } = useContext(AuthenticationContext)

    if (userData.userType === "sitter" || userData.userType === "client" || userData.userType === "SYS_Admin") {
        return (
            <>
                <td>
                    {dayFixed}
                </td>
                <td>
                    {month}
                </td>
                <td>
                    {year}
                </td>
            </>
        )
    } else {
        return (
            <div>
                {dayFixed}{month}{year}
            </div>
        )
    }
}

export default DateFixed