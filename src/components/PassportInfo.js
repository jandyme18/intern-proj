import React from 'react'

export const PassportInfo = ({text, info}) => {
    return (
        <>
            <span class="text-dark-blue">{text}</span> {info} <br />
        </>
    )
}
