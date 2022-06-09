import React from 'react'

export const TableData = ({ info }) => {
    return (
        <tr>
            <td>{info.tripDtm}</td>
            <td>{info.tripType}</td>
            <td>{info.flightNo}</td>
            <td>{info.visatype}</td>
            <td>{info.checkPoint}</td>
            <td>{info.thResidence}</td>
        </tr>
    )
}

