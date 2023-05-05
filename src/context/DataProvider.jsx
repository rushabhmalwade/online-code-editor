import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    
    return (
        <DataProvider.Provider
        value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs
        }}
        >
    {children}
        </DataProvider.Provider>
    )
}

export default DataProvider;