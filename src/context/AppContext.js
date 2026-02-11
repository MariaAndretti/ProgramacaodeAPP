import {useState, createContext} from "react"

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (tipo) => {
        setUser({ name: 'Usuario Teste', role: tipo});

    };

    const logout = () => {
        setUser(null);
    };

    return  (
    
    <AppContext.Provider value={{user,login,logout }}></AppContext.Provider>

    );
    
};
