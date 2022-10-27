import React, { createContext, useState } from 'react'

export const ResponseContext = createContext({})

const Response = ({ children }) => {
    const [response, setResponse] = useState({
        domain: '',
        result: []
    })

    return (
        <ResponseContext.Provider value={{ response, setResponse }}>
            {children}
        </ResponseContext.Provider>
    )
}

export default Response