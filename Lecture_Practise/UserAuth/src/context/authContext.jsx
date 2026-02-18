import { createContext , useState , useContext , useEffect } from "react";
import { sessionStorageService } from "../utils/storage";

const AuthContext = createContext()

export const useAuth = () => {

  const context = useContext(AuthContext)

  if(!context){
    throw new Error("useAuth must needed.")
  }

  return context;
}

export const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null)
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(null)

  useEffect(() => {
    const initialize = () => {
      try{
        let currentUser = sessionStorageService.getCurrentUser()

        if(!currentUser){
          currentUser = sessionStorageService.gerUser()
        }else{
          sessionStorageService.setCurrentUser(currentUser)
        }

        setUser(currentUser)

      }catch(err){
        console.log("Auth initialization error:" , err);
        setError("failed to initialize authenticator!!")
      }finally{
        setLoading(false)
      }
    }

    initialize();
  } , [])

  return(
    <>
      <AuthContext.Provider value={{user , loading , error}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}



