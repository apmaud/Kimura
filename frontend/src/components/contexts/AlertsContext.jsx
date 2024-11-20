import React, { createContext } from 'react'

const AlertsContext = createContext();

const AlertsProvider = ({ children }) => {


    return (
    <div>AlertsContext</div>
    )
}

export { AlertsProvider }