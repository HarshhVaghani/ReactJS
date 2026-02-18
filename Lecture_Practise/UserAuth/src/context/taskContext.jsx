import { createContext , useState , useContext , useEffect } from "react";
import { sessionStorageService } from "../utils/storage";

const TaskContext = createContext()

export const useTask = () => {

  const context = useContext(TaskContext)

  if(!context){
    throw new Error("Task is not Defined....")
  }

  return context;
}

export const TaskProvider = ({children}) => {

  const [task , setTask] = useState([])
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(null)
  const [filterTasks , setFilterTasks]= useState([{
    status:'',
    pagination:'',
    searching:'',
    priority:''
  }])
  const [filter , setFilter] = useState([])

  useEffect(() => {
    loadTask();
  } , [])

  const loadTask = () => {
    try{
      setLoading(true);
      const allTasks = StorageManager.getTasks()
      setTask(allTasks)
      setFilter(allTasks)
      setFilterTasks(allTasks)

      const newTask = () => {

      } // TaskForm


    }catch(err){
      setError(err.message)
      return {success:false , error:err.message}
    }
  }



  return(
    <>
      <TaskContext.Provider value={{task , loading , error}}>
        {children}
      </TaskContext.Provider>
    </>
  )
}





