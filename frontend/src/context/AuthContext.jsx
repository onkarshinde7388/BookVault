import React, {useState, createContext,  useContext} from 'react'

const AuthContext = createContext();
export default function AuthProvider({children}) {
   const initialAuthUser = localStorage.getItem("User");
   const [authUser, setAuthUser] = useState(initialAuthUser && initialAuthUser !== "undefined" ? JSON.parse(initialAuthUser): null);

   return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
   )
}

export const useAuth = () => useContext(AuthContext);